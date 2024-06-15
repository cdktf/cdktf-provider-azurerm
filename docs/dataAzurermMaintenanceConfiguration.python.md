# `dataAzurermMaintenanceConfiguration` Submodule <a name="`dataAzurermMaintenanceConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMaintenanceConfiguration <a name="DataAzurermMaintenanceConfiguration" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration azurerm_maintenance_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration(
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
  timeouts: DataAzurermMaintenanceConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#timeouts DataAzurermMaintenanceConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#read DataAzurermMaintenanceConfiguration#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMaintenanceConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMaintenanceConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMaintenanceConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMaintenanceConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMaintenanceConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.inGuestUserPatchMode">in_guest_user_patch_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.installPatches">install_patches</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList">DataAzurermMaintenanceConfigurationInstallPatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference">DataAzurermMaintenanceConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.window">window</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList">DataAzurermMaintenanceConfigurationWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `in_guest_user_patch_mode`<sup>Required</sup> <a name="in_guest_user_patch_mode" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.inGuestUserPatchMode"></a>

```python
in_guest_user_patch_mode: str
```

- *Type:* str

---

##### `install_patches`<sup>Required</sup> <a name="install_patches" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.installPatches"></a>

```python
install_patches: DataAzurermMaintenanceConfigurationInstallPatchesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList">DataAzurermMaintenanceConfigurationInstallPatchesList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.properties"></a>

```python
properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeouts"></a>

```python
timeouts: DataAzurermMaintenanceConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference">DataAzurermMaintenanceConfigurationTimeoutsOutputReference</a>

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.window"></a>

```python
window: DataAzurermMaintenanceConfigurationWindowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList">DataAzurermMaintenanceConfigurationWindowList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMaintenanceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMaintenanceConfigurationConfig <a name="DataAzurermMaintenanceConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig(
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
  timeouts: DataAzurermMaintenanceConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#name DataAzurermMaintenanceConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#resource_group_name DataAzurermMaintenanceConfiguration#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#id DataAzurermMaintenanceConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMaintenanceConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#timeouts DataAzurermMaintenanceConfiguration#timeouts}

---

### DataAzurermMaintenanceConfigurationInstallPatches <a name="DataAzurermMaintenanceConfigurationInstallPatches" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches()
```


### DataAzurermMaintenanceConfigurationInstallPatchesLinux <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinux" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux()
```


### DataAzurermMaintenanceConfigurationInstallPatchesWindows <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindows" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows()
```


### DataAzurermMaintenanceConfigurationTimeouts <a name="DataAzurermMaintenanceConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#read DataAzurermMaintenanceConfiguration#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/data-sources/maintenance_configuration#read DataAzurermMaintenanceConfiguration#read}.

---

### DataAzurermMaintenanceConfigurationWindow <a name="DataAzurermMaintenanceConfigurationWindow" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMaintenanceConfigurationInstallPatchesLinuxList <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinuxList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude">package_names_mask_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude">package_names_mask_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux">DataAzurermMaintenanceConfigurationInstallPatchesLinux</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications_to_include`<sup>Required</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_exclude`<sup>Required</sup> <a name="package_names_mask_to_exclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToExclude"></a>

```python
package_names_mask_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `package_names_mask_to_include`<sup>Required</sup> <a name="package_names_mask_to_include" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.packageNamesMaskToInclude"></a>

```python
package_names_mask_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMaintenanceConfigurationInstallPatchesLinux
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinux">DataAzurermMaintenanceConfigurationInstallPatchesLinux</a>

---


### DataAzurermMaintenanceConfigurationInstallPatchesList <a name="DataAzurermMaintenanceConfigurationInstallPatchesList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMaintenanceConfigurationInstallPatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMaintenanceConfigurationInstallPatchesOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.linux">linux</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList">DataAzurermMaintenanceConfigurationInstallPatchesLinuxList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.reboot">reboot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.windows">windows</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList">DataAzurermMaintenanceConfigurationInstallPatchesWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches">DataAzurermMaintenanceConfigurationInstallPatches</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `linux`<sup>Required</sup> <a name="linux" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.linux"></a>

```python
linux: DataAzurermMaintenanceConfigurationInstallPatchesLinuxList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesLinuxList">DataAzurermMaintenanceConfigurationInstallPatchesLinuxList</a>

---

##### `reboot`<sup>Required</sup> <a name="reboot" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.reboot"></a>

```python
reboot: str
```

- *Type:* str

---

##### `windows`<sup>Required</sup> <a name="windows" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.windows"></a>

```python
windows: DataAzurermMaintenanceConfigurationInstallPatchesWindowsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList">DataAzurermMaintenanceConfigurationInstallPatchesWindowsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMaintenanceConfigurationInstallPatches
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatches">DataAzurermMaintenanceConfigurationInstallPatches</a>

---


### DataAzurermMaintenanceConfigurationInstallPatchesWindowsList <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindowsList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference <a name="DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude">classifications_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude">kb_numbers_to_exclude</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude">kb_numbers_to_include</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows">DataAzurermMaintenanceConfigurationInstallPatchesWindows</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classifications_to_include`<sup>Required</sup> <a name="classifications_to_include" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.classificationsToInclude"></a>

```python
classifications_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_exclude`<sup>Required</sup> <a name="kb_numbers_to_exclude" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToExclude"></a>

```python
kb_numbers_to_exclude: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kb_numbers_to_include`<sup>Required</sup> <a name="kb_numbers_to_include" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.kbNumbersToInclude"></a>

```python
kb_numbers_to_include: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindowsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMaintenanceConfigurationInstallPatchesWindows
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationInstallPatchesWindows">DataAzurermMaintenanceConfigurationInstallPatchesWindows</a>

---


### DataAzurermMaintenanceConfigurationTimeoutsOutputReference <a name="DataAzurermMaintenanceConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMaintenanceConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationTimeouts">DataAzurermMaintenanceConfigurationTimeouts</a>]

---


### DataAzurermMaintenanceConfigurationWindowList <a name="DataAzurermMaintenanceConfigurationWindowList" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMaintenanceConfigurationWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMaintenanceConfigurationWindowOutputReference <a name="DataAzurermMaintenanceConfigurationWindowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_maintenance_configuration

dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.expirationDateTime">expiration_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.recurEvery">recur_every</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.startDateTime">start_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow">DataAzurermMaintenanceConfigurationWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `expiration_date_time`<sup>Required</sup> <a name="expiration_date_time" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.expirationDateTime"></a>

```python
expiration_date_time: str
```

- *Type:* str

---

##### `recur_every`<sup>Required</sup> <a name="recur_every" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.recurEvery"></a>

```python
recur_every: str
```

- *Type:* str

---

##### `start_date_time`<sup>Required</sup> <a name="start_date_time" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.startDateTime"></a>

```python
start_date_time: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMaintenanceConfigurationWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMaintenanceConfiguration.DataAzurermMaintenanceConfigurationWindow">DataAzurermMaintenanceConfigurationWindow</a>

---



