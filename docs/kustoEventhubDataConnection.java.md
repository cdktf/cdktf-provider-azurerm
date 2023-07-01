# `azurerm_kusto_eventhub_data_connection`

Refer to the Terraform Registory for docs: [`azurerm_kusto_eventhub_data_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection).

# `kustoEventhubDataConnection` Submodule <a name="`kustoEventhubDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoEventhubDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoEventhubDataConnection <a name="KustoEventhubDataConnection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection azurerm_kusto_eventhub_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnection;

KustoEventhubDataConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .consumerGroup(java.lang.String)
    .databaseName(java.lang.String)
    .eventhubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .compression(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventSystemProperties(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .tableName(java.lang.String)
//  .timeouts(KustoEventhubDataConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.consumerGroup"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}.

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.eventhubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.compression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.databaseRoutingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.dataFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.eventSystemProperties"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.identityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.mappingRuleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#timeouts KustoEventhubDataConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType">resetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties">resetEventSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId">resetIdentityId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName">resetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts"></a>

```java
public void putTimeouts(KustoEventhubDataConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---

##### `resetCompression` <a name="resetCompression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDatabaseRoutingType` <a name="resetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDatabaseRoutingType"></a>

```java
public void resetDatabaseRoutingType()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetEventSystemProperties` <a name="resetEventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetEventSystemProperties"></a>

```java
public void resetEventSystemProperties()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityId` <a name="resetIdentityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetIdentityId"></a>

```java
public void resetIdentityId()
```

##### `resetMappingRuleName` <a name="resetMappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetMappingRuleName"></a>

```java
public void resetMappingRuleName()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnection;

KustoEventhubDataConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnection;

KustoEventhubDataConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnection;

KustoEventhubDataConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput">consumerGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput">databaseRoutingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput">eventhubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput">eventSystemPropertiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput">identityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput">mappingRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId">identityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeouts"></a>

```java
public KustoEventhubDataConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference">KustoEventhubDataConnectionTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroupInput"></a>

```java
public java.lang.String getConsumerGroupInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `databaseRoutingTypeInput`<sup>Optional</sup> <a name="databaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingTypeInput"></a>

```java
public java.lang.String getDatabaseRoutingTypeInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `eventhubIdInput`<sup>Optional</sup> <a name="eventhubIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubIdInput"></a>

```java
public java.lang.String getEventhubIdInput();
```

- *Type:* java.lang.String

---

##### `eventSystemPropertiesInput`<sup>Optional</sup> <a name="eventSystemPropertiesInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemPropertiesInput"></a>

```java
public java.util.List<java.lang.String> getEventSystemPropertiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityIdInput`<sup>Optional</sup> <a name="identityIdInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityIdInput"></a>

```java
public java.lang.String getIdentityIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mappingRuleNameInput`<sup>Optional</sup> <a name="mappingRuleNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleNameInput"></a>

```java
public java.lang.String getMappingRuleNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `databaseRoutingType`<sup>Required</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventhubId"></a>

```java
public java.lang.String getEventhubId();
```

- *Type:* java.lang.String

---

##### `eventSystemProperties`<sup>Required</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.eventSystemProperties"></a>

```java
public java.util.List<java.lang.String> getEventSystemProperties();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityId`<sup>Required</sup> <a name="identityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mappingRuleName`<sup>Required</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoEventhubDataConnectionConfig <a name="KustoEventhubDataConnectionConfig" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnectionConfig;

KustoEventhubDataConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .clusterName(java.lang.String)
    .consumerGroup(java.lang.String)
    .databaseName(java.lang.String)
    .eventhubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .compression(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventSystemProperties(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .identityId(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .tableName(java.lang.String)
//  .timeouts(KustoEventhubDataConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup">consumerGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression">compression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties">eventSystemProperties</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId">identityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#cluster_name KustoEventhubDataConnection#cluster_name}.

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.consumerGroup"></a>

```java
public java.lang.String getConsumerGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#consumer_group KustoEventhubDataConnection#consumer_group}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_name KustoEventhubDataConnection#database_name}.

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventhubId"></a>

```java
public java.lang.String getEventhubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#eventhub_id KustoEventhubDataConnection#eventhub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#location KustoEventhubDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#name KustoEventhubDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#resource_group_name KustoEventhubDataConnection#resource_group_name}.

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#compression KustoEventhubDataConnection#compression}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#database_routing_type KustoEventhubDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#data_format KustoEventhubDataConnection#data_format}.

---

##### `eventSystemProperties`<sup>Optional</sup> <a name="eventSystemProperties" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.eventSystemProperties"></a>

```java
public java.util.List<java.lang.String> getEventSystemProperties();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#event_system_properties KustoEventhubDataConnection#event_system_properties}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#id KustoEventhubDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityId`<sup>Optional</sup> <a name="identityId" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.identityId"></a>

```java
public java.lang.String getIdentityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#identity_id KustoEventhubDataConnection#identity_id}.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#mapping_rule_name KustoEventhubDataConnection#mapping_rule_name}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#table_name KustoEventhubDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionConfig.property.timeouts"></a>

```java
public KustoEventhubDataConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#timeouts KustoEventhubDataConnection#timeouts}

---

### KustoEventhubDataConnectionTimeouts <a name="KustoEventhubDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnectionTimeouts;

KustoEventhubDataConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#create KustoEventhubDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#delete KustoEventhubDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#read KustoEventhubDataConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.63.0/docs/resources/kusto_eventhub_data_connection#update KustoEventhubDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoEventhubDataConnectionTimeoutsOutputReference <a name="KustoEventhubDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventhub_data_connection.KustoEventhubDataConnectionTimeoutsOutputReference;

new KustoEventhubDataConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventhubDataConnection.KustoEventhubDataConnectionTimeouts">KustoEventhubDataConnectionTimeouts</a>

---



