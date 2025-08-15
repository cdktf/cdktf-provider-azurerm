# `streamAnalyticsReferenceInputMssql` Submodule <a name="`streamAnalyticsReferenceInputMssql` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsReferenceInputMssql <a name="StreamAnalyticsReferenceInputMssql" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql azurerm_stream_analytics_reference_input_mssql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  full_snapshot_query: str,
  name: str,
  password: str,
  refresh_type: str,
  resource_group_name: str,
  server: str,
  stream_analytics_job_name: str,
  username: str,
  delta_snapshot_query: str = None,
  id: str = None,
  refresh_interval_duration: str = None,
  table: str = None,
  timeouts: StreamAnalyticsReferenceInputMssqlTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.fullSnapshotQuery">full_snapshot_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshType">refresh_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.deltaSnapshotQuery">delta_snapshot_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshIntervalDuration">refresh_interval_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}.

---

##### `full_snapshot_query`<sup>Required</sup> <a name="full_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.fullSnapshotQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}.

---

##### `refresh_type`<sup>Required</sup> <a name="refresh_type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.server"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}.

---

##### `delta_snapshot_query`<sup>Optional</sup> <a name="delta_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.deltaSnapshotQuery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_duration`<sup>Optional</sup> <a name="refresh_interval_duration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshIntervalDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.table"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery">reset_delta_snapshot_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration">reset_refresh_interval_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}.

---

##### `reset_delta_snapshot_query` <a name="reset_delta_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery"></a>

```python
def reset_delta_snapshot_query() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_interval_duration` <a name="reset_refresh_interval_duration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration"></a>

```python
def reset_refresh_interval_duration() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StreamAnalyticsReferenceInputMssql to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StreamAnalyticsReferenceInputMssql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsReferenceInputMssql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput">delta_snapshot_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput">full_snapshot_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput">refresh_interval_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput">refresh_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput">stream_analytics_job_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery">delta_snapshot_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery">full_snapshot_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration">refresh_interval_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType">refresh_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table">table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts"></a>

```python
timeouts: StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `delta_snapshot_query_input`<sup>Optional</sup> <a name="delta_snapshot_query_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput"></a>

```python
delta_snapshot_query_input: str
```

- *Type:* str

---

##### `full_snapshot_query_input`<sup>Optional</sup> <a name="full_snapshot_query_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput"></a>

```python
full_snapshot_query_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `refresh_interval_duration_input`<sup>Optional</sup> <a name="refresh_interval_duration_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput"></a>

```python
refresh_interval_duration_input: str
```

- *Type:* str

---

##### `refresh_type_input`<sup>Optional</sup> <a name="refresh_type_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput"></a>

```python
refresh_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `stream_analytics_job_name_input`<sup>Optional</sup> <a name="stream_analytics_job_name_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput"></a>

```python
stream_analytics_job_name_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StreamAnalyticsReferenceInputMssqlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `delta_snapshot_query`<sup>Required</sup> <a name="delta_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery"></a>

```python
delta_snapshot_query: str
```

- *Type:* str

---

##### `full_snapshot_query`<sup>Required</sup> <a name="full_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery"></a>

```python
full_snapshot_query: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `refresh_interval_duration`<sup>Required</sup> <a name="refresh_interval_duration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration"></a>

```python
refresh_interval_duration: str
```

- *Type:* str

---

##### `refresh_type`<sup>Required</sup> <a name="refresh_type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType"></a>

```python
refresh_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table"></a>

```python
table: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsReferenceInputMssqlConfig <a name="StreamAnalyticsReferenceInputMssqlConfig" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  full_snapshot_query: str,
  name: str,
  password: str,
  refresh_type: str,
  resource_group_name: str,
  server: str,
  stream_analytics_job_name: str,
  username: str,
  delta_snapshot_query: str = None,
  id: str = None,
  refresh_interval_duration: str = None,
  table: str = None,
  timeouts: StreamAnalyticsReferenceInputMssqlTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery">full_snapshot_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType">refresh_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server">server</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName">stream_analytics_job_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery">delta_snapshot_query</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration">refresh_interval_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table">table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}.

---

##### `full_snapshot_query`<sup>Required</sup> <a name="full_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery"></a>

```python
full_snapshot_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}.

---

##### `refresh_type`<sup>Required</sup> <a name="refresh_type" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType"></a>

```python
refresh_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server"></a>

```python
server: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}.

---

##### `stream_analytics_job_name`<sup>Required</sup> <a name="stream_analytics_job_name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName"></a>

```python
stream_analytics_job_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}.

---

##### `delta_snapshot_query`<sup>Optional</sup> <a name="delta_snapshot_query" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery"></a>

```python
delta_snapshot_query: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_duration`<sup>Optional</sup> <a name="refresh_interval_duration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration"></a>

```python
refresh_interval_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table"></a>

```python
table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts"></a>

```python
timeouts: StreamAnalyticsReferenceInputMssqlTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}

---

### StreamAnalyticsReferenceInputMssqlTimeouts <a name="StreamAnalyticsReferenceInputMssqlTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference <a name="StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stream_analytics_reference_input_mssql

streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StreamAnalyticsReferenceInputMssqlTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>]

---



