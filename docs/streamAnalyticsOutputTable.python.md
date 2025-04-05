# `streamAnalyticsOutputTable` Submodule <a name="`streamAnalyticsOutputTable` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsOutputTable <a name="StreamAnalyticsOutputTable" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table azurerm_stream_analytics_output_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTable(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_size: typing.Union[int, float],
  name: str,
  partition_key: str,
  resource_group_name: str,
  row_key: str,
  storage_account_key: str,
  storage_account_name: str,
  stream_analytics_job_name: str,
  table: str,
  columns_to_remove: typing.List[str] = None,
  id: str = None,
  timeouts: StreamAnalyticsOutputTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.rowKey">row_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.columnsToRemove">columns_to_remove</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}.

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.partitionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}.

---

##### `row_key`<sup>Required</sup> <a name="row_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.rowKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.storageAccountKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.table"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}.

---

##### `columns_to_remove`<sup>Optional</sup> <a name="columns_to_remove" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.columnsToRemove"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#timeouts StreamAnalyticsOutputTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetColumnsToRemove">reset_columns_to_remove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#create StreamAnalyticsOutputTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#delete StreamAnalyticsOutputTable#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#read StreamAnalyticsOutputTable#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#update StreamAnalyticsOutputTable#update}.

---

##### `reset_columns_to_remove` <a name="reset_columns_to_remove" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetColumnsToRemove"></a>

```python
def reset_columns_to_remove() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsOutputTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsOutputTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsOutputTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsOutputTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsOutputTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference">StreamAnalyticsOutputTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemoveInput">columns_to_remove_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKeyInput">partition_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKeyInput">row_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKeyInput">storage_account_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobNameInput">stream_analytics_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemove">columns_to_remove</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKey">partition_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKey">row_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference">StreamAnalyticsOutputTableTimeoutsOutputReference</a>

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `columns_to_remove_input`<sup>Optional</sup> <a name="columns_to_remove_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemoveInput"></a>

```python
columns_to_remove_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_key_input`<sup>Optional</sup> <a name="partition_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKeyInput"></a>

```python
partition_key_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `row_key_input`<sup>Optional</sup> <a name="row_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKeyInput"></a>

```python
row_key_input: str
```

- *Type:* str

---

##### `storage_account_key_input`<sup>Optional</sup> <a name="storage_account_key_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKeyInput"></a>

```python
storage_account_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `stream_analytics_job_name_input`<sup>Optional</sup> <a name="stream_analytics_job_name_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobNameInput"></a>

```python
stream_analytics_job_name_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsOutputTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `columns_to_remove`<sup>Required</sup> <a name="columns_to_remove" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.columnsToRemove"></a>

```python
columns_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `row_key`<sup>Required</sup> <a name="row_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.rowKey"></a>

```python
row_key: str
```

- *Type:* str

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsOutputTableConfig <a name="StreamAnalyticsOutputTableConfig" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  batch_size: typing.Union[int, float],
  name: str,
  partition_key: str,
  resource_group_name: str,
  row_key: str,
  storage_account_key: str,
  storage_account_name: str,
  stream_analytics_job_name: str,
  table: str,
  columns_to_remove: typing.List[str] = None,
  id: str = None,
  timeouts: StreamAnalyticsOutputTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.partitionKey">partition_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.rowKey">row_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountKey">storage_account_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.columnsToRemove">columns_to_remove</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#batch_size StreamAnalyticsOutputTable#batch_size}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#name StreamAnalyticsOutputTable#name}.

---

##### `partition_key`<sup>Required</sup> <a name="partition_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.partitionKey"></a>

```python
partition_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#partition_key StreamAnalyticsOutputTable#partition_key}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#resource_group_name StreamAnalyticsOutputTable#resource_group_name}.

---

##### `row_key`<sup>Required</sup> <a name="row_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.rowKey"></a>

```python
row_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#row_key StreamAnalyticsOutputTable#row_key}.

---

##### `storage_account_key`<sup>Required</sup> <a name="storage_account_key" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountKey"></a>

```python
storage_account_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_key StreamAnalyticsOutputTable#storage_account_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#storage_account_name StreamAnalyticsOutputTable#storage_account_name}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#stream_analytics_job_name StreamAnalyticsOutputTable#stream_analytics_job_name}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.table"></a>

```python
table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#table StreamAnalyticsOutputTable#table}.

---

##### `columns_to_remove`<sup>Optional</sup> <a name="columns_to_remove" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.columnsToRemove"></a>

```python
columns_to_remove: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#columns_to_remove StreamAnalyticsOutputTable#columns_to_remove}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#id StreamAnalyticsOutputTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsOutputTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#timeouts StreamAnalyticsOutputTable#timeouts}

---

### StreamAnalyticsOutputTableTimeouts <a name="StreamAnalyticsOutputTableTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#create StreamAnalyticsOutputTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#delete StreamAnalyticsOutputTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#read StreamAnalyticsOutputTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#update StreamAnalyticsOutputTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#create StreamAnalyticsOutputTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#delete StreamAnalyticsOutputTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#read StreamAnalyticsOutputTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/resources/stream_analytics_output_table#update StreamAnalyticsOutputTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsOutputTableTimeoutsOutputReference <a name="StreamAnalyticsOutputTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_output_table

streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsOutputTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsOutputTable.StreamAnalyticsOutputTableTimeouts">StreamAnalyticsOutputTableTimeouts</a>]

---



