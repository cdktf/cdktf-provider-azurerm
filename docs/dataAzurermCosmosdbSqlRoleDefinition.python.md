# `dataAzurermCosmosdbSqlRoleDefinition` Submodule <a name="`dataAzurermCosmosdbSqlRoleDefinition` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbSqlRoleDefinition <a name="DataAzurermCosmosdbSqlRoleDefinition" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition azurerm_cosmosdb_sql_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  resource_group_name: str,
  role_definition_id: str,
  id: str = None,
  timeouts: DataAzurermCosmosdbSqlRoleDefinitionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#timeouts DataAzurermCosmosdbSqlRoleDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermCosmosdbSqlRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermCosmosdbSqlRoleDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermCosmosdbSqlRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermCosmosdbSqlRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes">assignable_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `assignable_scopes`<sup>Required</sup> <a name="assignable_scopes" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.assignableScopes"></a>

```python
assignable_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.permissions"></a>

```python
permissions: DataAzurermCosmosdbSqlRoleDefinitionPermissionsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList">DataAzurermCosmosdbSqlRoleDefinitionPermissionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeouts"></a>

```python
timeouts: DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference">DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermCosmosdbSqlRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbSqlRoleDefinitionConfig <a name="DataAzurermCosmosdbSqlRoleDefinitionConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  resource_group_name: str,
  role_definition_id: str,
  id: str = None,
  timeouts: DataAzurermCosmosdbSqlRoleDefinitionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#account_name DataAzurermCosmosdbSqlRoleDefinition#account_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#resource_group_name DataAzurermCosmosdbSqlRoleDefinition#resource_group_name}.

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#role_definition_id DataAzurermCosmosdbSqlRoleDefinition#role_definition_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#id DataAzurermCosmosdbSqlRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCosmosdbSqlRoleDefinitionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#timeouts DataAzurermCosmosdbSqlRoleDefinition#timeouts}

---

### DataAzurermCosmosdbSqlRoleDefinitionPermissions <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions()
```


### DataAzurermCosmosdbSqlRoleDefinitionTimeouts <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/cosmosdb_sql_role_definition#read DataAzurermCosmosdbSqlRoleDefinition#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbSqlRoleDefinitionPermissionsList <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions">data_actions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_actions`<sup>Required</sup> <a name="data_actions" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.dataActions"></a>

```python
data_actions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCosmosdbSqlRoleDefinitionPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionPermissions">DataAzurermCosmosdbSqlRoleDefinitionPermissions</a>

---


### DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference <a name="DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_sql_role_definition

dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermCosmosdbSqlRoleDefinitionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbSqlRoleDefinition.DataAzurermCosmosdbSqlRoleDefinitionTimeouts">DataAzurermCosmosdbSqlRoleDefinitionTimeouts</a>]

---



