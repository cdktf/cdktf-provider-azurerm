# `dataAzurermMysqlFlexibleServer` Submodule <a name="`dataAzurermMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMysqlFlexibleServer <a name="DataAzurermMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server azurerm_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer(
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
  timeouts: DataAzurermMysqlFlexibleServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#timeouts DataAzurermMysqlFlexibleServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMysqlFlexibleServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId">delegated_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability">high_availability</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId">private_dns_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity">replica_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole">replication_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegated_subnet_id`<sup>Required</sup> <a name="delegated_subnet_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.delegatedSubnetId"></a>

```python
delegated_subnet_id: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled`<sup>Required</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `high_availability`<sup>Required</sup> <a name="high_availability" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.highAvailability"></a>

```python
high_availability: DataAzurermMysqlFlexibleServerHighAvailabilityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList">DataAzurermMysqlFlexibleServerHighAvailabilityList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.maintenanceWindow"></a>

```python
maintenance_window: DataAzurermMysqlFlexibleServerMaintenanceWindowList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList">DataAzurermMysqlFlexibleServerMaintenanceWindowList</a>

---

##### `private_dns_zone_id`<sup>Required</sup> <a name="private_dns_zone_id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.privateDnsZoneId"></a>

```python
private_dns_zone_id: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `replica_capacity`<sup>Required</sup> <a name="replica_capacity" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicaCapacity"></a>

```python
replica_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replication_role`<sup>Required</sup> <a name="replication_role" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.replicationRole"></a>

```python
replication_role: str
```

- *Type:* str

---

##### `restore_point_in_time`<sup>Required</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.storage"></a>

```python
storage: DataAzurermMysqlFlexibleServerStorageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList">DataAzurermMysqlFlexibleServerStorageList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeouts"></a>

```python
timeouts: DataAzurermMysqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference">DataAzurermMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMysqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMysqlFlexibleServerConfig <a name="DataAzurermMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig(
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
  timeouts: DataAzurermMysqlFlexibleServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#name DataAzurermMysqlFlexibleServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#resource_group_name DataAzurermMysqlFlexibleServer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#id DataAzurermMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMysqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#timeouts DataAzurermMysqlFlexibleServer#timeouts}

---

### DataAzurermMysqlFlexibleServerHighAvailability <a name="DataAzurermMysqlFlexibleServerHighAvailability" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability()
```


### DataAzurermMysqlFlexibleServerMaintenanceWindow <a name="DataAzurermMysqlFlexibleServerMaintenanceWindow" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow()
```


### DataAzurermMysqlFlexibleServerStorage <a name="DataAzurermMysqlFlexibleServerStorage" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage()
```


### DataAzurermMysqlFlexibleServerTimeouts <a name="DataAzurermMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.1/docs/data-sources/mysql_flexible_server#read DataAzurermMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMysqlFlexibleServerHighAvailabilityList <a name="DataAzurermMysqlFlexibleServerHighAvailabilityList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference <a name="DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">standby_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `standby_availability_zone`<sup>Required</sup> <a name="standby_availability_zone" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```python
standby_availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMysqlFlexibleServerHighAvailability
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerHighAvailability">DataAzurermMysqlFlexibleServerHighAvailability</a>

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowList <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference <a name="DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute`<sup>Required</sup> <a name="start_minute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMysqlFlexibleServerMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerMaintenanceWindow">DataAzurermMysqlFlexibleServerMaintenanceWindow</a>

---


### DataAzurermMysqlFlexibleServerStorageList <a name="DataAzurermMysqlFlexibleServerStorageList" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMysqlFlexibleServerStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMysqlFlexibleServerStorageOutputReference <a name="DataAzurermMysqlFlexibleServerStorageOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled">auto_grow_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled">io_scaling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb">size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_grow_enabled`<sup>Required</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.autoGrowEnabled"></a>

```python
auto_grow_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `io_scaling_enabled`<sup>Required</sup> <a name="io_scaling_enabled" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.ioScalingEnabled"></a>

```python
io_scaling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size_gb`<sup>Required</sup> <a name="size_gb" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.sizeGb"></a>

```python
size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorageOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMysqlFlexibleServerStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerStorage">DataAzurermMysqlFlexibleServerStorage</a>

---


### DataAzurermMysqlFlexibleServerTimeoutsOutputReference <a name="DataAzurermMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mysql_flexible_server

dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMysqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMysqlFlexibleServer.DataAzurermMysqlFlexibleServerTimeouts">DataAzurermMysqlFlexibleServerTimeouts</a>]

---



