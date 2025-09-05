# `dataAzurermLogicAppStandard` Submodule <a name="`dataAzurermLogicAppStandard` Submodule" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermLogicAppStandard <a name="DataAzurermLogicAppStandard" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard azurerm_logic_app_standard}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandard(
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
  timeouts: DataAzurermLogicAppStandardTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#timeouts DataAzurermLogicAppStandard#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermLogicAppStandard resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermLogicAppStandard resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermLogicAppStandard to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermLogicAppStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermLogicAppStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appSettings">app_settings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.bundleVersion">bundle_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientCertificateMode">client_certificate_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList">DataAzurermLogicAppStandardConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.ftpPublishBasicAuthenticationEnabled">ftp_publish_basic_authentication_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.httpsOnly">https_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList">DataAzurermLogicAppStandardIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.publicNetworkAccess">public_network_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.scmPublishBasicAuthenticationEnabled">scm_publish_basic_authentication_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList">DataAzurermLogicAppStandardSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList">DataAzurermLogicAppStandardSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountShareName">storage_account_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference">DataAzurermLogicAppStandardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.useExtensionBundle">use_extension_bundle</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.appSettings"></a>

```python
app_settings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `bundle_version`<sup>Required</sup> <a name="bundle_version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.bundleVersion"></a>

```python
bundle_version: str
```

- *Type:* str

---

##### `client_affinity_enabled`<sup>Required</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `client_certificate_mode`<sup>Required</sup> <a name="client_certificate_mode" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.clientCertificateMode"></a>

```python
client_certificate_mode: str
```

- *Type:* str

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.connectionString"></a>

```python
connection_string: DataAzurermLogicAppStandardConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList">DataAzurermLogicAppStandardConnectionStringList</a>

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ftp_publish_basic_authentication_enabled`<sup>Required</sup> <a name="ftp_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.ftpPublishBasicAuthenticationEnabled"></a>

```python
ftp_publish_basic_authentication_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.httpsOnly"></a>

```python
https_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.identity"></a>

```python
identity: DataAzurermLogicAppStandardIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList">DataAzurermLogicAppStandardIdentityList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `public_network_access`<sup>Required</sup> <a name="public_network_access" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.publicNetworkAccess"></a>

```python
public_network_access: str
```

- *Type:* str

---

##### `scm_publish_basic_authentication_enabled`<sup>Required</sup> <a name="scm_publish_basic_authentication_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.scmPublishBasicAuthenticationEnabled"></a>

```python
scm_publish_basic_authentication_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteConfig"></a>

```python
site_config: DataAzurermLogicAppStandardSiteConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList">DataAzurermLogicAppStandardSiteConfigList</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.siteCredential"></a>

```python
site_credential: DataAzurermLogicAppStandardSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList">DataAzurermLogicAppStandardSiteCredentialList</a>

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `storage_account_share_name`<sup>Required</sup> <a name="storage_account_share_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.storageAccountShareName"></a>

```python
storage_account_share_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeouts"></a>

```python
timeouts: DataAzurermLogicAppStandardTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference">DataAzurermLogicAppStandardTimeoutsOutputReference</a>

---

##### `use_extension_bundle`<sup>Required</sup> <a name="use_extension_bundle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.useExtensionBundle"></a>

```python
use_extension_bundle: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermLogicAppStandardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermLogicAppStandardConfig <a name="DataAzurermLogicAppStandardConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig(
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
  timeouts: DataAzurermLogicAppStandardTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#name DataAzurermLogicAppStandard#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#resource_group_name DataAzurermLogicAppStandard#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#id DataAzurermLogicAppStandard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConfig.property.timeouts"></a>

```python
timeouts: DataAzurermLogicAppStandardTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#timeouts DataAzurermLogicAppStandard#timeouts}

---

### DataAzurermLogicAppStandardConnectionString <a name="DataAzurermLogicAppStandardConnectionString" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString()
```


### DataAzurermLogicAppStandardIdentity <a name="DataAzurermLogicAppStandardIdentity" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity()
```


### DataAzurermLogicAppStandardSiteConfig <a name="DataAzurermLogicAppStandardSiteConfig" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig()
```


### DataAzurermLogicAppStandardSiteConfigCors <a name="DataAzurermLogicAppStandardSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors()
```


### DataAzurermLogicAppStandardSiteConfigIpRestriction <a name="DataAzurermLogicAppStandardSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction()
```


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders()
```


### DataAzurermLogicAppStandardSiteConfigScmIpRestriction <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction()
```


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders()
```


### DataAzurermLogicAppStandardSiteCredential <a name="DataAzurermLogicAppStandardSiteCredential" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential()
```


### DataAzurermLogicAppStandardTimeouts <a name="DataAzurermLogicAppStandardTimeouts" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/data-sources/logic_app_standard#read DataAzurermLogicAppStandard#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermLogicAppStandardConnectionStringList <a name="DataAzurermLogicAppStandardConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardConnectionStringOutputReference <a name="DataAzurermLogicAppStandardConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString">DataAzurermLogicAppStandardConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardConnectionString">DataAzurermLogicAppStandardConnectionString</a>

---


### DataAzurermLogicAppStandardIdentityList <a name="DataAzurermLogicAppStandardIdentityList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardIdentityOutputReference <a name="DataAzurermLogicAppStandardIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity">DataAzurermLogicAppStandardIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardIdentity">DataAzurermLogicAppStandardIdentity</a>

---


### DataAzurermLogicAppStandardSiteConfigCorsList <a name="DataAzurermLogicAppStandardSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigCorsOutputReference <a name="DataAzurermLogicAppStandardSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors">DataAzurermLogicAppStandardSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCors">DataAzurermLogicAppStandardSiteConfigCors</a>

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionList <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference <a name="DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction">DataAzurermLogicAppStandardSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigIpRestrictionHeadersList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfigIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestriction">DataAzurermLogicAppStandardSiteConfigIpRestriction</a>

---


### DataAzurermLogicAppStandardSiteConfigList <a name="DataAzurermLogicAppStandardSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigOutputReference <a name="DataAzurermLogicAppStandardSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList">DataAzurermLogicAppStandardSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList">DataAzurermLogicAppStandardSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion">scm_min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig">DataAzurermLogicAppStandardSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.cors"></a>

```python
cors: DataAzurermLogicAppStandardSiteConfigCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigCorsList">DataAzurermLogicAppStandardSiteConfigCorsList</a>

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: DataAzurermLogicAppStandardSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigIpRestrictionList">DataAzurermLogicAppStandardSiteConfigIpRestrictionList</a>

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList</a>

---

##### `scm_min_tls_version`<sup>Required</sup> <a name="scm_min_tls_version" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmMinTlsVersion"></a>

```python
scm_min_tls_version: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfig">DataAzurermLogicAppStandardSiteConfig</a>

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction">DataAzurermLogicAppStandardSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList">DataAzurermLogicAppStandardSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteConfigScmIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteConfigScmIpRestriction">DataAzurermLogicAppStandardSiteConfigScmIpRestriction</a>

---


### DataAzurermLogicAppStandardSiteCredentialList <a name="DataAzurermLogicAppStandardSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermLogicAppStandardSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermLogicAppStandardSiteCredentialOutputReference <a name="DataAzurermLogicAppStandardSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential">DataAzurermLogicAppStandardSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermLogicAppStandardSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardSiteCredential">DataAzurermLogicAppStandardSiteCredential</a>

---


### DataAzurermLogicAppStandardTimeoutsOutputReference <a name="DataAzurermLogicAppStandardTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_logic_app_standard

dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermLogicAppStandardTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermLogicAppStandard.DataAzurermLogicAppStandardTimeouts">DataAzurermLogicAppStandardTimeouts</a>]

---



