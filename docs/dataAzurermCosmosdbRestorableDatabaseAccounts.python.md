# `data_azurerm_cosmosdb_restorable_database_accounts`

Refer to the Terraform Registory for docs: [`data_azurerm_cosmosdb_restorable_database_accounts`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts).

# `dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule <a name="`dataAzurermCosmosdbRestorableDatabaseAccounts` Submodule" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts azurerm_cosmosdb_restorable_database_accounts}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#timeouts DataAzurermCosmosdbRestorableDatabaseAccounts#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.accounts"></a>

```python
accounts: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeouts"></a>

```python
timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference">DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccounts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccounts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccounts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts()
```


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations()
```


### DataAzurermCosmosdbRestorableDatabaseAccountsConfig <a name="DataAzurermCosmosdbRestorableDatabaseAccountsConfig" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#location DataAzurermCosmosdbRestorableDatabaseAccounts#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#name DataAzurermCosmosdbRestorableDatabaseAccounts#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#id DataAzurermCosmosdbRestorableDatabaseAccounts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsConfig.property.timeouts"></a>

```python
timeouts: DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#timeouts DataAzurermCosmosdbRestorableDatabaseAccounts#timeouts}

---

### DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/cosmosdb_restorable_database_accounts#read DataAzurermCosmosdbRestorableDatabaseAccounts#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType">api_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations">restorable_locations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_type`<sup>Required</sup> <a name="api_type" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.apiType"></a>

```python
api_type: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `restorable_locations`<sup>Required</sup> <a name="restorable_locations" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.restorableLocations"></a>

```python
restorable_locations: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCosmosdbRestorableDatabaseAccountsAccounts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccounts">DataAzurermCosmosdbRestorableDatabaseAccountsAccounts</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime">deletion_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId">regional_database_account_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `deletion_time`<sup>Required</sup> <a name="deletion_time" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.deletionTime"></a>

```python
deletion_time: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `regional_database_account_instance_id`<sup>Required</sup> <a name="regional_database_account_instance_id" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.regionalDatabaseAccountInstanceId"></a>

```python
regional_database_account_instance_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations">DataAzurermCosmosdbRestorableDatabaseAccountsAccountsRestorableLocations</a>

---


### DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference <a name="DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_cosmosdb_restorable_database_accounts

dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermCosmosdbRestorableDatabaseAccounts.DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts">DataAzurermCosmosdbRestorableDatabaseAccountsTimeouts</a>, cdktf.IResolvable]

---



