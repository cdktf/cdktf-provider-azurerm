# `dataAzurermAppServiceEnvironmentV3` Submodule <a name="`dataAzurermAppServiceEnvironmentV3` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceEnvironmentV3 <a name="DataAzurermAppServiceEnvironmentV3" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3 azurerm_app_service_environment_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3(
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
  timeouts: DataAzurermAppServiceEnvironmentV3Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermAppServiceEnvironmentV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermAppServiceEnvironmentV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermAppServiceEnvironmentV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppServiceEnvironmentV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections">allow_new_private_endpoint_connections</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting">cluster_setting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount">dedicated_host_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses">external_inbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies">inbound_network_dependencies</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses">internal_inbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode">internal_load_balancing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount">ip_ssl_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses">linux_outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier">pricing_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses">windows_outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant">zone_redundant</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allow_new_private_endpoint_connections`<sup>Required</sup> <a name="allow_new_private_endpoint_connections" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.allowNewPrivateEndpointConnections"></a>

```python
allow_new_private_endpoint_connections: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cluster_setting`<sup>Required</sup> <a name="cluster_setting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.clusterSetting"></a>

```python
cluster_setting: DataAzurermAppServiceEnvironmentV3ClusterSettingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList">DataAzurermAppServiceEnvironmentV3ClusterSettingList</a>

---

##### `dedicated_host_count`<sup>Required</sup> <a name="dedicated_host_count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dedicatedHostCount"></a>

```python
dedicated_host_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

---

##### `external_inbound_ip_addresses`<sup>Required</sup> <a name="external_inbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.externalInboundIpAddresses"></a>

```python
external_inbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inbound_network_dependencies`<sup>Required</sup> <a name="inbound_network_dependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.inboundNetworkDependencies"></a>

```python
inbound_network_dependencies: DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList">DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList</a>

---

##### `internal_inbound_ip_addresses`<sup>Required</sup> <a name="internal_inbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalInboundIpAddresses"></a>

```python
internal_inbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_load_balancing_mode`<sup>Required</sup> <a name="internal_load_balancing_mode" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.internalLoadBalancingMode"></a>

```python
internal_load_balancing_mode: str
```

- *Type:* str

---

##### `ip_ssl_address_count`<sup>Required</sup> <a name="ip_ssl_address_count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.ipSslAddressCount"></a>

```python
ip_ssl_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `linux_outbound_ip_addresses`<sup>Required</sup> <a name="linux_outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.linuxOutboundIpAddresses"></a>

```python
linux_outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `pricing_tier`<sup>Required</sup> <a name="pricing_tier" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.pricingTier"></a>

```python
pricing_tier: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeouts"></a>

```python
timeouts: DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference">DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference</a>

---

##### `windows_outbound_ip_addresses`<sup>Required</sup> <a name="windows_outbound_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.windowsOutboundIpAddresses"></a>

```python
windows_outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_redundant`<sup>Required</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.zoneRedundant"></a>

```python
zone_redundant: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermAppServiceEnvironmentV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSetting <a name="DataAzurermAppServiceEnvironmentV3ClusterSetting" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting()
```


### DataAzurermAppServiceEnvironmentV3Config <a name="DataAzurermAppServiceEnvironmentV3Config" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config(
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
  timeouts: DataAzurermAppServiceEnvironmentV3Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#name DataAzurermAppServiceEnvironmentV3#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#resource_group_name DataAzurermAppServiceEnvironmentV3#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#id DataAzurermAppServiceEnvironmentV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Config.property.timeouts"></a>

```python
timeouts: DataAzurermAppServiceEnvironmentV3Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#timeouts DataAzurermAppServiceEnvironmentV3#timeouts}

---

### DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies()
```


### DataAzurermAppServiceEnvironmentV3Timeouts <a name="DataAzurermAppServiceEnvironmentV3Timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/data-sources/app_service_environment_v3#read DataAzurermAppServiceEnvironmentV3#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceEnvironmentV3ClusterSettingList <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference <a name="DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSettingOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppServiceEnvironmentV3ClusterSetting
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3ClusterSetting">DataAzurermAppServiceEnvironmentV3ClusterSetting</a>

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference <a name="DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports">ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.ports"></a>

```python
ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies">DataAzurermAppServiceEnvironmentV3InboundNetworkDependencies</a>

---


### DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference <a name="DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_environment_v3

dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermAppServiceEnvironmentV3Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceEnvironmentV3.DataAzurermAppServiceEnvironmentV3Timeouts">DataAzurermAppServiceEnvironmentV3Timeouts</a>]

---



