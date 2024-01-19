# `kustoCosmosdbDataConnection` Submodule <a name="`kustoCosmosdbDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoCosmosdbDataConnection <a name="KustoCosmosdbDataConnection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection azurerm_kusto_cosmosdb_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cosmosdb_container_id: str,
  kusto_database_id: str,
  location: str,
  managed_identity_id: str,
  name: str,
  table_name: str,
  id: str = None,
  mapping_rule_name: str = None,
  retrieval_start_date: str = None,
  timeouts: KustoCosmosdbDataConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.cosmosdbContainerId">cosmosdb_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.kustoDatabaseId">kusto_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.retrievalStartDate">retrieval_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmosdb_container_id`<sup>Required</sup> <a name="cosmosdb_container_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.cosmosdbContainerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}.

---

##### `kusto_database_id`<sup>Required</sup> <a name="kusto_database_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.kustoDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}.

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mapping_rule_name`<sup>Optional</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.mappingRuleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}.

---

##### `retrieval_start_date`<sup>Optional</sup> <a name="retrieval_start_date" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.retrievalStartDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#timeouts KustoCosmosdbDataConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName">reset_mapping_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate">reset_retrieval_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mapping_rule_name` <a name="reset_mapping_rule_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName"></a>

```python
def reset_mapping_rule_name() -> None
```

##### `reset_retrieval_start_date` <a name="reset_retrieval_start_date" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate"></a>

```python
def reset_retrieval_start_date() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KustoCosmosdbDataConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KustoCosmosdbDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KustoCosmosdbDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput">cosmosdb_container_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput">kusto_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput">mapping_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput">retrieval_start_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId">cosmosdb_container_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId">kusto_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate">retrieval_start_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts"></a>

```python
timeouts: KustoCosmosdbDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a>

---

##### `cosmosdb_container_id_input`<sup>Optional</sup> <a name="cosmosdb_container_id_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput"></a>

```python
cosmosdb_container_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kusto_database_id_input`<sup>Optional</sup> <a name="kusto_database_id_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput"></a>

```python
kusto_database_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `mapping_rule_name_input`<sup>Optional</sup> <a name="mapping_rule_name_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput"></a>

```python
mapping_rule_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retrieval_start_date_input`<sup>Optional</sup> <a name="retrieval_start_date_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput"></a>

```python
retrieval_start_date_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KustoCosmosdbDataConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>]

---

##### `cosmosdb_container_id`<sup>Required</sup> <a name="cosmosdb_container_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId"></a>

```python
cosmosdb_container_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kusto_database_id`<sup>Required</sup> <a name="kusto_database_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId"></a>

```python
kusto_database_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `mapping_rule_name`<sup>Required</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName"></a>

```python
mapping_rule_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `retrieval_start_date`<sup>Required</sup> <a name="retrieval_start_date" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate"></a>

```python
retrieval_start_date: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoCosmosdbDataConnectionConfig <a name="KustoCosmosdbDataConnectionConfig" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cosmosdb_container_id: str,
  kusto_database_id: str,
  location: str,
  managed_identity_id: str,
  name: str,
  table_name: str,
  id: str = None,
  mapping_rule_name: str = None,
  retrieval_start_date: str = None,
  timeouts: KustoCosmosdbDataConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId">cosmosdb_container_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId">kusto_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate">retrieval_start_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cosmosdb_container_id`<sup>Required</sup> <a name="cosmosdb_container_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId"></a>

```python
cosmosdb_container_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}.

---

##### `kusto_database_id`<sup>Required</sup> <a name="kusto_database_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId"></a>

```python
kusto_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}.

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}.

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mapping_rule_name`<sup>Optional</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName"></a>

```python
mapping_rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}.

---

##### `retrieval_start_date`<sup>Optional</sup> <a name="retrieval_start_date" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate"></a>

```python
retrieval_start_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts"></a>

```python
timeouts: KustoCosmosdbDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#timeouts KustoCosmosdbDataConnection#timeouts}

---

### KustoCosmosdbDataConnectionTimeouts <a name="KustoCosmosdbDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoCosmosdbDataConnectionTimeoutsOutputReference <a name="KustoCosmosdbDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_cosmosdb_data_connection

kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KustoCosmosdbDataConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>]

---



