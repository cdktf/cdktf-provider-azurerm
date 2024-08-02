# `streamAnalyticsOutputCosmosdb` Submodule <a name="`streamAnalyticsOutputCosmosdb` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputCosmosdb <a name="StreamAnalyticsOutputCosmosdb" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb azurerm_stream_analytics_output_cosmosdb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  cosmosdb_account_key: str,
  cosmosdb_sql_database_id: str,
  name: str,
  stream_analytics_job_id: str,
  document_id: str = None,
  id: str = None,
  partition_key: str = None,
  timeouts: StreamAnalyticsOutputCosmosdbTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.cosmosdbAccountKey">cosmosdb_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.cosmosdbSqlDatabaseId">cosmosdb_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.documentId">document_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.containerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}.

---

##### `cosmosdb_account_key`<sup>Required</sup> <a name="cosmosdb_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.cosmosdbAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}.

---

##### `cosmosdb_sql_database_id`<sup>Required</sup> <a name="cosmosdb_sql_database_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.cosmosdbSqlDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.streamAnalyticsJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}.

---

##### `document_id`<sup>Optional</sup> <a name="document_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.documentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.partitionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#timeouts StreamAnalyticsOutputCosmosdb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetDocumentId">reset_document_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetPartitionKey">reset_partition_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}.

---

##### `reset_document_id` <a name="reset_document_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetDocumentId"></a>

```python
def reset_document_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_partition_key` <a name="reset_partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetPartitionKey"></a>

```python
def reset_partition_key() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputCosmosdb resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsOutputCosmosdb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsOutputCosmosdb to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsOutputCosmosdb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputCosmosdb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference">StreamAnalyticsOutputCosmosdbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerNameInput">container_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKeyInput">cosmosdb_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseIdInput">cosmosdb_sql_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentIdInput">document_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobIdInput">stream_analytics_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerName">container_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKey">cosmosdb_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseId">cosmosdb_sql_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentId">document_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputCosmosdbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference">StreamAnalyticsOutputCosmosdbTimeoutsOutputReference</a>

---

##### `container_name_input`<sup>Optional</sup> <a name="container_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerNameInput"></a>

```python
container_name_input: str
```

- *Type:* str

---

##### `cosmosdb_account_key_input`<sup>Optional</sup> <a name="cosmosdb_account_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKeyInput"></a>

```python
cosmosdb_account_key_input: str
```

- *Type:* str

---

##### `cosmosdb_sql_database_id_input`<sup>Optional</sup> <a name="cosmosdb_sql_database_id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseIdInput"></a>

```python
cosmosdb_sql_database_id_input: str
```

- *Type:* str

---

##### `document_id_input`<sup>Optional</sup> <a name="document_id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentIdInput"></a>

```python
document_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `stream_analytics_job_id_input`<sup>Optional</sup> <a name="stream_analytics_job_id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobIdInput"></a>

```python
stream_analytics_job_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsOutputCosmosdbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

---

##### `cosmosdb_account_key`<sup>Required</sup> <a name="cosmosdb_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbAccountKey"></a>

```python
cosmosdb_account_key: str
```

- *Type:* str

---

##### `cosmosdb_sql_database_id`<sup>Required</sup> <a name="cosmosdb_sql_database_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.cosmosdbSqlDatabaseId"></a>

```python
cosmosdb_sql_database_id: str
```

- *Type:* str

---

##### `document_id`<sup>Required</sup> <a name="document_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.documentId"></a>

```python
document_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdb.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputCosmosdbConfig <a name="StreamAnalyticsOutputCosmosdbConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_name: str,
  cosmosdb_account_key: str,
  cosmosdb_sql_database_id: str,
  name: str,
  stream_analytics_job_id: str,
  document_id: str = None,
  id: str = None,
  partition_key: str = None,
  timeouts: StreamAnalyticsOutputCosmosdbTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.containerName">container_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbAccountKey">cosmosdb_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbSqlDatabaseId">cosmosdb_sql_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.streamAnalyticsJobId">stream_analytics_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.documentId">document_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_name`<sup>Required</sup> <a name="container_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.containerName"></a>

```python
container_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#container_name StreamAnalyticsOutputCosmosdb#container_name}.

---

##### `cosmosdb_account_key`<sup>Required</sup> <a name="cosmosdb_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbAccountKey"></a>

```python
cosmosdb_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_account_key StreamAnalyticsOutputCosmosdb#cosmosdb_account_key}.

---

##### `cosmosdb_sql_database_id`<sup>Required</sup> <a name="cosmosdb_sql_database_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.cosmosdbSqlDatabaseId"></a>

```python
cosmosdb_sql_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#cosmosdb_sql_database_id StreamAnalyticsOutputCosmosdb#cosmosdb_sql_database_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#name StreamAnalyticsOutputCosmosdb#name}.

---

##### `stream_analytics_job_id`<sup>Required</sup> <a name="stream_analytics_job_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.streamAnalyticsJobId"></a>

```python
stream_analytics_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#stream_analytics_job_id StreamAnalyticsOutputCosmosdb#stream_analytics_job_id}.

---

##### `document_id`<sup>Optional</sup> <a name="document_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.documentId"></a>

```python
document_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#document_id StreamAnalyticsOutputCosmosdb#document_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#id StreamAnalyticsOutputCosmosdb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partition_key`<sup>Optional</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#partition_key StreamAnalyticsOutputCosmosdb#partition_key}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputCosmosdbTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#timeouts StreamAnalyticsOutputCosmosdb#timeouts}

---

### StreamAnalyticsOutputCosmosdbTimeouts <a name="StreamAnalyticsOutputCosmosdbTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#create StreamAnalyticsOutputCosmosdb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#delete StreamAnalyticsOutputCosmosdb#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#read StreamAnalyticsOutputCosmosdb#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/stream_analytics_output_cosmosdb#update StreamAnalyticsOutputCosmosdb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputCosmosdbTimeoutsOutputReference <a name="StreamAnalyticsOutputCosmosdbTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_cosmosdb

streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsOutputCosmosdbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputCosmosdb.StreamAnalyticsOutputCosmosdbTimeouts">StreamAnalyticsOutputCosmosdbTimeouts</a>]

---



