# `dataAzurermExtendedLocationCustomLocation` Submodule <a name="`dataAzurermExtendedLocationCustomLocation` Submodule" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExtendedLocationCustomLocation <a name="DataAzurermExtendedLocationCustomLocation" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location azurerm_extended_location_custom_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation(
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
  timeouts: DataAzurermExtendedLocationCustomLocationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#name DataAzurermExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#resource_group_name DataAzurermExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#id DataAzurermExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#name DataAzurermExtendedLocationCustomLocation#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#resource_group_name DataAzurermExtendedLocationCustomLocation#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#id DataAzurermExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#timeouts DataAzurermExtendedLocationCustomLocation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#read DataAzurermExtendedLocationCustomLocation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermExtendedLocationCustomLocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermExtendedLocationCustomLocation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermExtendedLocationCustomLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermExtendedLocationCustomLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList">DataAzurermExtendedLocationCustomLocationAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.clusterExtensionIds">cluster_extension_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.hostResourceId">host_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.hostType">host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference">DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.authentication"></a>

```python
authentication: DataAzurermExtendedLocationCustomLocationAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList">DataAzurermExtendedLocationCustomLocationAuthenticationList</a>

---

##### `cluster_extension_ids`<sup>Required</sup> <a name="cluster_extension_ids" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.clusterExtensionIds"></a>

```python
cluster_extension_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `host_resource_id`<sup>Required</sup> <a name="host_resource_id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.hostResourceId"></a>

```python
host_resource_id: str
```

- *Type:* str

---

##### `host_type`<sup>Required</sup> <a name="host_type" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.hostType"></a>

```python
host_type: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.timeouts"></a>

```python
timeouts: DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference">DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermExtendedLocationCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExtendedLocationCustomLocationAuthentication <a name="DataAzurermExtendedLocationCustomLocationAuthentication" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthentication()
```


### DataAzurermExtendedLocationCustomLocationConfig <a name="DataAzurermExtendedLocationCustomLocationConfig" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig(
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
  timeouts: DataAzurermExtendedLocationCustomLocationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#name DataAzurermExtendedLocationCustomLocation#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#resource_group_name DataAzurermExtendedLocationCustomLocation#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#id DataAzurermExtendedLocationCustomLocation#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#name DataAzurermExtendedLocationCustomLocation#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#resource_group_name DataAzurermExtendedLocationCustomLocation#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#id DataAzurermExtendedLocationCustomLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationConfig.property.timeouts"></a>

```python
timeouts: DataAzurermExtendedLocationCustomLocationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#timeouts DataAzurermExtendedLocationCustomLocation#timeouts}

---

### DataAzurermExtendedLocationCustomLocationTimeouts <a name="DataAzurermExtendedLocationCustomLocationTimeouts" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#read DataAzurermExtendedLocationCustomLocation#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/extended_location_custom_location#read DataAzurermExtendedLocationCustomLocation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExtendedLocationCustomLocationAuthenticationList <a name="DataAzurermExtendedLocationCustomLocationAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference <a name="DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthentication">DataAzurermExtendedLocationCustomLocationAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermExtendedLocationCustomLocationAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationAuthentication">DataAzurermExtendedLocationCustomLocationAuthentication</a>

---


### DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference <a name="DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_extended_location_custom_location

dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermExtendedLocationCustomLocationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExtendedLocationCustomLocation.DataAzurermExtendedLocationCustomLocationTimeouts">DataAzurermExtendedLocationCustomLocationTimeouts</a>]

---



