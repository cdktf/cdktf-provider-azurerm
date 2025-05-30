# `dataAzurermMssqlManagedDatabase` Submodule <a name="`dataAzurermMssqlManagedDatabase` Submodule" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMssqlManagedDatabase <a name="DataAzurermMssqlManagedDatabase" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database azurerm_mssql_managed_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMssqlManagedDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#timeouts DataAzurermMssqlManagedDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermMssqlManagedDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermMssqlManagedDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermMssqlManagedDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMssqlManagedDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy">long_term_retention_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName">managed_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore">point_in_time_restore</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays">short_term_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `long_term_retention_policy`<sup>Required</sup> <a name="long_term_retention_policy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.longTermRetentionPolicy"></a>

```python
long_term_retention_policy: DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList</a>

---

##### `managed_instance_name`<sup>Required</sup> <a name="managed_instance_name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceName"></a>

```python
managed_instance_name: str
```

- *Type:* str

---

##### `point_in_time_restore`<sup>Required</sup> <a name="point_in_time_restore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.pointInTimeRestore"></a>

```python
point_in_time_restore: DataAzurermMssqlManagedDatabasePointInTimeRestoreList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList">DataAzurermMssqlManagedDatabasePointInTimeRestoreList</a>

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `short_term_retention_days`<sup>Required</sup> <a name="short_term_retention_days" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.shortTermRetentionDays"></a>

```python
short_term_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeouts"></a>

```python
timeouts: DataAzurermMssqlManagedDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference">DataAzurermMssqlManagedDatabaseTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermMssqlManagedDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMssqlManagedDatabaseConfig <a name="DataAzurermMssqlManagedDatabaseConfig" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermMssqlManagedDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#managed_instance_id DataAzurermMssqlManagedDatabase#managed_instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#name DataAzurermMssqlManagedDatabase#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#id DataAzurermMssqlManagedDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseConfig.property.timeouts"></a>

```python
timeouts: DataAzurermMssqlManagedDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#timeouts DataAzurermMssqlManagedDatabase#timeouts}

---

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy()
```


### DataAzurermMssqlManagedDatabasePointInTimeRestore <a name="DataAzurermMssqlManagedDatabasePointInTimeRestore" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore()
```


### DataAzurermMssqlManagedDatabaseTimeouts <a name="DataAzurermMssqlManagedDatabaseTimeouts" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/data-sources/mssql_managed_database#read DataAzurermMssqlManagedDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference <a name="DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled">immutable_backups_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention">monthly_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention">weekly_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear">week_of_year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention">yearly_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `immutable_backups_enabled`<sup>Required</sup> <a name="immutable_backups_enabled" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.immutableBackupsEnabled"></a>

```python
immutable_backups_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `monthly_retention`<sup>Required</sup> <a name="monthly_retention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.monthlyRetention"></a>

```python
monthly_retention: str
```

- *Type:* str

---

##### `weekly_retention`<sup>Required</sup> <a name="weekly_retention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weeklyRetention"></a>

```python
weekly_retention: str
```

- *Type:* str

---

##### `week_of_year`<sup>Required</sup> <a name="week_of_year" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.weekOfYear"></a>

```python
week_of_year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `yearly_retention`<sup>Required</sup> <a name="yearly_retention" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.yearlyRetention"></a>

```python
yearly_retention: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy">DataAzurermMssqlManagedDatabaseLongTermRetentionPolicy</a>

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreList <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreList" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference <a name="DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId">source_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `restore_point_in_time`<sup>Required</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

---

##### `source_database_id`<sup>Required</sup> <a name="source_database_id" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.sourceDatabaseId"></a>

```python
source_database_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestoreOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermMssqlManagedDatabasePointInTimeRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabasePointInTimeRestore">DataAzurermMssqlManagedDatabasePointInTimeRestore</a>

---


### DataAzurermMssqlManagedDatabaseTimeoutsOutputReference <a name="DataAzurermMssqlManagedDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_mssql_managed_database

dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermMssqlManagedDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermMssqlManagedDatabase.DataAzurermMssqlManagedDatabaseTimeouts">DataAzurermMssqlManagedDatabaseTimeouts</a>]

---



