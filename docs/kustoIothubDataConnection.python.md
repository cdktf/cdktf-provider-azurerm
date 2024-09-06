# `kustoIothubDataConnection` Submodule <a name="`kustoIothubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoIothubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoIothubDataConnection <a name="KustoIothubDataConnection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection azurerm_kusto_iothub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  consumer_group: str,
  database_name: str,
  iothub_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  shared_access_policy_name: str,
  database_routing_type: str = None,
  data_format: str = None,
  event_system_properties: typing.List[str] = None,
  id: str = None,
  mapping_rule_name: str = None,
  table_name: str = None,
  timeouts: KustoIothubDataConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.consumerGroup">consumer_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseRoutingType">database_routing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.eventSystemProperties">event_system_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.consumerGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.iothubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `shared_access_policy_name`<sup>Required</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.sharedAccessPolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `database_routing_type`<sup>Optional</sup> <a name="database_routing_type" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.databaseRoutingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.dataFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `event_system_properties`<sup>Optional</sup> <a name="event_system_properties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.eventSystemProperties"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mapping_rule_name`<sup>Optional</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.mappingRuleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.tableName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType">reset_database_routing_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat">reset_data_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties">reset_event_system_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName">reset_mapping_rule_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName">reset_table_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}.

---

##### `reset_database_routing_type` <a name="reset_database_routing_type" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDatabaseRoutingType"></a>

```python
def reset_database_routing_type() -> None
```

##### `reset_data_format` <a name="reset_data_format" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetDataFormat"></a>

```python
def reset_data_format() -> None
```

##### `reset_event_system_properties` <a name="reset_event_system_properties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetEventSystemProperties"></a>

```python
def reset_event_system_properties() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mapping_rule_name` <a name="reset_mapping_rule_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetMappingRuleName"></a>

```python
def reset_mapping_rule_name() -> None
```

##### `reset_table_name` <a name="reset_table_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTableName"></a>

```python
def reset_table_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KustoIothubDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KustoIothubDataConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KustoIothubDataConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KustoIothubDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KustoIothubDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput">consumer_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput">database_routing_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput">data_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput">event_system_properties_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput">iothub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput">mapping_rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput">shared_access_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup">consumer_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType">database_routing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat">data_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties">event_system_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId">iothub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeouts"></a>

```python
timeouts: KustoIothubDataConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference">KustoIothubDataConnectionTimeoutsOutputReference</a>

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `consumer_group_input`<sup>Optional</sup> <a name="consumer_group_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroupInput"></a>

```python
consumer_group_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `database_routing_type_input`<sup>Optional</sup> <a name="database_routing_type_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingTypeInput"></a>

```python
database_routing_type_input: str
```

- *Type:* str

---

##### `data_format_input`<sup>Optional</sup> <a name="data_format_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormatInput"></a>

```python
data_format_input: str
```

- *Type:* str

---

##### `event_system_properties_input`<sup>Optional</sup> <a name="event_system_properties_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemPropertiesInput"></a>

```python
event_system_properties_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_id_input`<sup>Optional</sup> <a name="iothub_id_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubIdInput"></a>

```python
iothub_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mapping_rule_name_input`<sup>Optional</sup> <a name="mapping_rule_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleNameInput"></a>

```python
mapping_rule_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `shared_access_policy_name_input`<sup>Optional</sup> <a name="shared_access_policy_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyNameInput"></a>

```python
shared_access_policy_name_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KustoIothubDataConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_routing_type`<sup>Required</sup> <a name="database_routing_type" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.databaseRoutingType"></a>

```python
database_routing_type: str
```

- *Type:* str

---

##### `data_format`<sup>Required</sup> <a name="data_format" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

---

##### `event_system_properties`<sup>Required</sup> <a name="event_system_properties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.eventSystemProperties"></a>

```python
event_system_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mapping_rule_name`<sup>Required</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.mappingRuleName"></a>

```python
mapping_rule_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shared_access_policy_name`<sup>Required</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KustoIothubDataConnectionConfig <a name="KustoIothubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_name: str,
  consumer_group: str,
  database_name: str,
  iothub_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  shared_access_policy_name: str,
  database_routing_type: str = None,
  data_format: str = None,
  event_system_properties: typing.List[str] = None,
  id: str = None,
  mapping_rule_name: str = None,
  table_name: str = None,
  timeouts: KustoIothubDataConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup">consumer_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId">iothub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName">shared_access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType">database_routing_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat">data_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties">event_system_properties</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName">mapping_rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName">table_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#cluster_name KustoIothubDataConnection#cluster_name}.

---

##### `consumer_group`<sup>Required</sup> <a name="consumer_group" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.consumerGroup"></a>

```python
consumer_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#consumer_group KustoIothubDataConnection#consumer_group}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_name KustoIothubDataConnection#database_name}.

---

##### `iothub_id`<sup>Required</sup> <a name="iothub_id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.iothubId"></a>

```python
iothub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#iothub_id KustoIothubDataConnection#iothub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#location KustoIothubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#name KustoIothubDataConnection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#resource_group_name KustoIothubDataConnection#resource_group_name}.

---

##### `shared_access_policy_name`<sup>Required</sup> <a name="shared_access_policy_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.sharedAccessPolicyName"></a>

```python
shared_access_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#shared_access_policy_name KustoIothubDataConnection#shared_access_policy_name}.

---

##### `database_routing_type`<sup>Optional</sup> <a name="database_routing_type" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.databaseRoutingType"></a>

```python
database_routing_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#database_routing_type KustoIothubDataConnection#database_routing_type}.

---

##### `data_format`<sup>Optional</sup> <a name="data_format" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.dataFormat"></a>

```python
data_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#data_format KustoIothubDataConnection#data_format}.

---

##### `event_system_properties`<sup>Optional</sup> <a name="event_system_properties" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.eventSystemProperties"></a>

```python
event_system_properties: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#event_system_properties KustoIothubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#id KustoIothubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mapping_rule_name`<sup>Optional</sup> <a name="mapping_rule_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.mappingRuleName"></a>

```python
mapping_rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#mapping_rule_name KustoIothubDataConnection#mapping_rule_name}.

---

##### `table_name`<sup>Optional</sup> <a name="table_name" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#table_name KustoIothubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionConfig.property.timeouts"></a>

```python
timeouts: KustoIothubDataConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#timeouts KustoIothubDataConnection#timeouts}

---

### KustoIothubDataConnectionTimeouts <a name="KustoIothubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#create KustoIothubDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#delete KustoIothubDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/kusto_iothub_data_connection#read KustoIothubDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoIothubDataConnectionTimeoutsOutputReference <a name="KustoIothubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import kusto_iothub_data_connection

kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KustoIothubDataConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.kustoIothubDataConnection.KustoIothubDataConnectionTimeouts">KustoIothubDataConnectionTimeouts</a>]

---



