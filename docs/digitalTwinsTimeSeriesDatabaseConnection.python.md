# `digitalTwinsTimeSeriesDatabaseConnection` Submodule <a name="`digitalTwinsTimeSeriesDatabaseConnection` Submodule" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DigitalTwinsTimeSeriesDatabaseConnection <a name="DigitalTwinsTimeSeriesDatabaseConnection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection azurerm_digital_twins_time_series_database_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  digital_twins_id: str,
  eventhub_name: str,
  eventhub_namespace_endpoint_uri: str,
  eventhub_namespace_id: str,
  kusto_cluster_id: str,
  kusto_cluster_uri: str,
  kusto_database_name: str,
  name: str,
  eventhub_consumer_group_name: str = None,
  id: str = None,
  kusto_table_name: str = None,
  timeouts: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.digitalTwinsId">digital_twins_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceEndpointUri">eventhub_namespace_endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterId">kusto_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterUri">kusto_cluster_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoTableName">kusto_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `digital_twins_id`<sup>Required</sup> <a name="digital_twins_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.digitalTwinsId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}.

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}.

---

##### `eventhub_namespace_endpoint_uri`<sup>Required</sup> <a name="eventhub_namespace_endpoint_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceEndpointUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}.

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubNamespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}.

---

##### `kusto_cluster_id`<sup>Required</sup> <a name="kusto_cluster_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}.

---

##### `kusto_cluster_uri`<sup>Required</sup> <a name="kusto_cluster_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoClusterUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}.

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}.

---

##### `eventhub_consumer_group_name`<sup>Optional</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.eventhubConsumerGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kusto_table_name`<sup>Optional</sup> <a name="kusto_table_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.kustoTableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName">reset_eventhub_consumer_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName">reset_kusto_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}.

---

##### `reset_eventhub_consumer_group_name` <a name="reset_eventhub_consumer_group_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetEventhubConsumerGroupName"></a>

```python
def reset_eventhub_consumer_group_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kusto_table_name` <a name="reset_kusto_table_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetKustoTableName"></a>

```python
def reset_kusto_table_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DigitalTwinsTimeSeriesDatabaseConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DigitalTwinsTimeSeriesDatabaseConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DigitalTwinsTimeSeriesDatabaseConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DigitalTwinsTimeSeriesDatabaseConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DigitalTwinsTimeSeriesDatabaseConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput">digital_twins_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput">eventhub_consumer_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput">eventhub_namespace_endpoint_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput">eventhub_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput">kusto_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput">kusto_cluster_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput">kusto_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput">kusto_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId">digital_twins_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri">eventhub_namespace_endpoint_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId">kusto_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri">kusto_cluster_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName">kusto_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeouts"></a>

```python
timeouts: DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference">DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference</a>

---

##### `digital_twins_id_input`<sup>Optional</sup> <a name="digital_twins_id_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsIdInput"></a>

```python
digital_twins_id_input: str
```

- *Type:* str

---

##### `eventhub_consumer_group_name_input`<sup>Optional</sup> <a name="eventhub_consumer_group_name_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupNameInput"></a>

```python
eventhub_consumer_group_name_input: str
```

- *Type:* str

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `eventhub_namespace_endpoint_uri_input`<sup>Optional</sup> <a name="eventhub_namespace_endpoint_uri_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUriInput"></a>

```python
eventhub_namespace_endpoint_uri_input: str
```

- *Type:* str

---

##### `eventhub_namespace_id_input`<sup>Optional</sup> <a name="eventhub_namespace_id_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceIdInput"></a>

```python
eventhub_namespace_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kusto_cluster_id_input`<sup>Optional</sup> <a name="kusto_cluster_id_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterIdInput"></a>

```python
kusto_cluster_id_input: str
```

- *Type:* str

---

##### `kusto_cluster_uri_input`<sup>Optional</sup> <a name="kusto_cluster_uri_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUriInput"></a>

```python
kusto_cluster_uri_input: str
```

- *Type:* str

---

##### `kusto_database_name_input`<sup>Optional</sup> <a name="kusto_database_name_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseNameInput"></a>

```python
kusto_database_name_input: str
```

- *Type:* str

---

##### `kusto_table_name_input`<sup>Optional</sup> <a name="kusto_table_name_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableNameInput"></a>

```python
kusto_table_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DigitalTwinsTimeSeriesDatabaseConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>]

---

##### `digital_twins_id`<sup>Required</sup> <a name="digital_twins_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.digitalTwinsId"></a>

```python
digital_twins_id: str
```

- *Type:* str

---

##### `eventhub_consumer_group_name`<sup>Required</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubConsumerGroupName"></a>

```python
eventhub_consumer_group_name: str
```

- *Type:* str

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `eventhub_namespace_endpoint_uri`<sup>Required</sup> <a name="eventhub_namespace_endpoint_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceEndpointUri"></a>

```python
eventhub_namespace_endpoint_uri: str
```

- *Type:* str

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.eventhubNamespaceId"></a>

```python
eventhub_namespace_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kusto_cluster_id`<sup>Required</sup> <a name="kusto_cluster_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterId"></a>

```python
kusto_cluster_id: str
```

- *Type:* str

---

##### `kusto_cluster_uri`<sup>Required</sup> <a name="kusto_cluster_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoClusterUri"></a>

```python
kusto_cluster_uri: str
```

- *Type:* str

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoDatabaseName"></a>

```python
kusto_database_name: str
```

- *Type:* str

---

##### `kusto_table_name`<sup>Required</sup> <a name="kusto_table_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.kustoTableName"></a>

```python
kusto_table_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionConfig <a name="DigitalTwinsTimeSeriesDatabaseConnectionConfig" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  digital_twins_id: str,
  eventhub_name: str,
  eventhub_namespace_endpoint_uri: str,
  eventhub_namespace_id: str,
  kusto_cluster_id: str,
  kusto_cluster_uri: str,
  kusto_database_name: str,
  name: str,
  eventhub_consumer_group_name: str = None,
  id: str = None,
  kusto_table_name: str = None,
  timeouts: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId">digital_twins_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri">eventhub_namespace_endpoint_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId">kusto_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri">kusto_cluster_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName">kusto_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName">eventhub_consumer_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName">kusto_table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `digital_twins_id`<sup>Required</sup> <a name="digital_twins_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.digitalTwinsId"></a>

```python
digital_twins_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#digital_twins_id DigitalTwinsTimeSeriesDatabaseConnection#digital_twins_id}.

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_name}.

---

##### `eventhub_namespace_endpoint_uri`<sup>Required</sup> <a name="eventhub_namespace_endpoint_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceEndpointUri"></a>

```python
eventhub_namespace_endpoint_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_endpoint_uri DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_endpoint_uri}.

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubNamespaceId"></a>

```python
eventhub_namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_namespace_id DigitalTwinsTimeSeriesDatabaseConnection#eventhub_namespace_id}.

---

##### `kusto_cluster_id`<sup>Required</sup> <a name="kusto_cluster_id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterId"></a>

```python
kusto_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_id DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_id}.

---

##### `kusto_cluster_uri`<sup>Required</sup> <a name="kusto_cluster_uri" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoClusterUri"></a>

```python
kusto_cluster_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_cluster_uri DigitalTwinsTimeSeriesDatabaseConnection#kusto_cluster_uri}.

---

##### `kusto_database_name`<sup>Required</sup> <a name="kusto_database_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoDatabaseName"></a>

```python
kusto_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_database_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#name DigitalTwinsTimeSeriesDatabaseConnection#name}.

---

##### `eventhub_consumer_group_name`<sup>Optional</sup> <a name="eventhub_consumer_group_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.eventhubConsumerGroupName"></a>

```python
eventhub_consumer_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#eventhub_consumer_group_name DigitalTwinsTimeSeriesDatabaseConnection#eventhub_consumer_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#id DigitalTwinsTimeSeriesDatabaseConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kusto_table_name`<sup>Optional</sup> <a name="kusto_table_name" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.kustoTableName"></a>

```python
kusto_table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#kusto_table_name DigitalTwinsTimeSeriesDatabaseConnection#kusto_table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionConfig.property.timeouts"></a>

```python
timeouts: DigitalTwinsTimeSeriesDatabaseConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#timeouts DigitalTwinsTimeSeriesDatabaseConnection#timeouts}

---

### DigitalTwinsTimeSeriesDatabaseConnectionTimeouts <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeouts" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#create DigitalTwinsTimeSeriesDatabaseConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#delete DigitalTwinsTimeSeriesDatabaseConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/digital_twins_time_series_database_connection#read DigitalTwinsTimeSeriesDatabaseConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference <a name="DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import digital_twins_time_series_database_connection

digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DigitalTwinsTimeSeriesDatabaseConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.digitalTwinsTimeSeriesDatabaseConnection.DigitalTwinsTimeSeriesDatabaseConnectionTimeouts">DigitalTwinsTimeSeriesDatabaseConnectionTimeouts</a>]

---



