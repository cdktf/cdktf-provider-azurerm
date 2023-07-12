# `azurerm_kusto_eventgrid_data_connection`

Refer to the Terraform Registory for docs: [`azurerm_kusto_eventgrid_data_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection).

# `kustoEventgridDataConnection` Submodule <a name="`kustoEventgridDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoEventgridDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoEventgridDataConnection <a name="KustoEventgridDataConnection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection azurerm_kusto_eventgrid_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnection;

KustoEventgridDataConnection.Builder.create(Construct scope, java.lang.String id)
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
    .databaseName(java.lang.String)
    .eventhubConsumerGroupName(java.lang.String)
    .eventhubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountId(java.lang.String)
//  .blobStorageEventType(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventgridResourceId(java.lang.String)
//  .id(java.lang.String)
//  .managedIdentityResourceId(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .skipFirstRecord(java.lang.Boolean)
//  .skipFirstRecord(IResolvable)
//  .tableName(java.lang.String)
//  .timeouts(KustoEventgridDataConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.blobStorageEventType">blobStorageEventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventgridResourceId">eventgridResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.skipFirstRecord">skipFirstRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}.

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventhubConsumerGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}.

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventhubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.storageAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}.

---

##### `blobStorageEventType`<sup>Optional</sup> <a name="blobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.blobStorageEventType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.databaseRoutingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.dataFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}.

---

##### `eventgridResourceId`<sup>Optional</sup> <a name="eventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.eventgridResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedIdentityResourceId`<sup>Optional</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.managedIdentityResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.mappingRuleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}.

---

##### `skipFirstRecord`<sup>Optional</sup> <a name="skipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.skipFirstRecord"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.tableName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#timeouts KustoEventgridDataConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetBlobStorageEventType">resetBlobStorageEventType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDatabaseRoutingType">resetDatabaseRoutingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetEventgridResourceId">resetEventgridResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetManagedIdentityResourceId">resetManagedIdentityResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetMappingRuleName">resetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetSkipFirstRecord">resetSkipFirstRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts"></a>

```java
public void putTimeouts(KustoEventgridDataConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

---

##### `resetBlobStorageEventType` <a name="resetBlobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetBlobStorageEventType"></a>

```java
public void resetBlobStorageEventType()
```

##### `resetDatabaseRoutingType` <a name="resetDatabaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDatabaseRoutingType"></a>

```java
public void resetDatabaseRoutingType()
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetDataFormat"></a>

```java
public void resetDataFormat()
```

##### `resetEventgridResourceId` <a name="resetEventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetEventgridResourceId"></a>

```java
public void resetEventgridResourceId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetId"></a>

```java
public void resetId()
```

##### `resetManagedIdentityResourceId` <a name="resetManagedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetManagedIdentityResourceId"></a>

```java
public void resetManagedIdentityResourceId()
```

##### `resetMappingRuleName` <a name="resetMappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetMappingRuleName"></a>

```java
public void resetMappingRuleName()
```

##### `resetSkipFirstRecord` <a name="resetSkipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetSkipFirstRecord"></a>

```java
public void resetSkipFirstRecord()
```

##### `resetTableName` <a name="resetTableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnection;

KustoEventgridDataConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnection;

KustoEventgridDataConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnection;

KustoEventgridDataConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference">KustoEventgridDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventTypeInput">blobStorageEventTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingTypeInput">databaseRoutingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormatInput">dataFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceIdInput">eventgridResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupNameInput">eventhubConsumerGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubIdInput">eventhubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceIdInput">managedIdentityResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleNameInput">mappingRuleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecordInput">skipFirstRecordInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventType">blobStorageEventType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceId">eventgridResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecord">skipFirstRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeouts"></a>

```java
public KustoEventgridDataConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference">KustoEventgridDataConnectionTimeoutsOutputReference</a>

---

##### `blobStorageEventTypeInput`<sup>Optional</sup> <a name="blobStorageEventTypeInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventTypeInput"></a>

```java
public java.lang.String getBlobStorageEventTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `databaseRoutingTypeInput`<sup>Optional</sup> <a name="databaseRoutingTypeInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingTypeInput"></a>

```java
public java.lang.String getDatabaseRoutingTypeInput();
```

- *Type:* java.lang.String

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormatInput"></a>

```java
public java.lang.String getDataFormatInput();
```

- *Type:* java.lang.String

---

##### `eventgridResourceIdInput`<sup>Optional</sup> <a name="eventgridResourceIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceIdInput"></a>

```java
public java.lang.String getEventgridResourceIdInput();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="eventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupNameInput"></a>

```java
public java.lang.String getEventhubConsumerGroupNameInput();
```

- *Type:* java.lang.String

---

##### `eventhubIdInput`<sup>Optional</sup> <a name="eventhubIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubIdInput"></a>

```java
public java.lang.String getEventhubIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedIdentityResourceIdInput`<sup>Optional</sup> <a name="managedIdentityResourceIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceIdInput"></a>

```java
public java.lang.String getManagedIdentityResourceIdInput();
```

- *Type:* java.lang.String

---

##### `mappingRuleNameInput`<sup>Optional</sup> <a name="mappingRuleNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleNameInput"></a>

```java
public java.lang.String getMappingRuleNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `skipFirstRecordInput`<sup>Optional</sup> <a name="skipFirstRecordInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecordInput"></a>

```java
public java.lang.Object getSkipFirstRecordInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountIdInput"></a>

```java
public java.lang.String getStorageAccountIdInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

---

##### `blobStorageEventType`<sup>Required</sup> <a name="blobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.blobStorageEventType"></a>

```java
public java.lang.String getBlobStorageEventType();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `databaseRoutingType`<sup>Required</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

---

##### `eventgridResourceId`<sup>Required</sup> <a name="eventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventgridResourceId"></a>

```java
public java.lang.String getEventgridResourceId();
```

- *Type:* java.lang.String

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.eventhubId"></a>

```java
public java.lang.String getEventhubId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedIdentityResourceId`<sup>Required</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

---

##### `mappingRuleName`<sup>Required</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `skipFirstRecord`<sup>Required</sup> <a name="skipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.skipFirstRecord"></a>

```java
public java.lang.Object getSkipFirstRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KustoEventgridDataConnectionConfig <a name="KustoEventgridDataConnectionConfig" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnectionConfig;

KustoEventgridDataConnectionConfig.builder()
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
    .databaseName(java.lang.String)
    .eventhubConsumerGroupName(java.lang.String)
    .eventhubId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .storageAccountId(java.lang.String)
//  .blobStorageEventType(java.lang.String)
//  .databaseRoutingType(java.lang.String)
//  .dataFormat(java.lang.String)
//  .eventgridResourceId(java.lang.String)
//  .id(java.lang.String)
//  .managedIdentityResourceId(java.lang.String)
//  .mappingRuleName(java.lang.String)
//  .skipFirstRecord(java.lang.Boolean)
//  .skipFirstRecord(IResolvable)
//  .tableName(java.lang.String)
//  .timeouts(KustoEventgridDataConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubConsumerGroupName">eventhubConsumerGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubId">eventhubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.storageAccountId">storageAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.blobStorageEventType">blobStorageEventType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseRoutingType">databaseRoutingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dataFormat">dataFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventgridResourceId">eventgridResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.managedIdentityResourceId">managedIdentityResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.mappingRuleName">mappingRuleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.skipFirstRecord">skipFirstRecord</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#cluster_name KustoEventgridDataConnection#cluster_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_name KustoEventgridDataConnection#database_name}.

---

##### `eventhubConsumerGroupName`<sup>Required</sup> <a name="eventhubConsumerGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubConsumerGroupName"></a>

```java
public java.lang.String getEventhubConsumerGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_consumer_group_name KustoEventgridDataConnection#eventhub_consumer_group_name}.

---

##### `eventhubId`<sup>Required</sup> <a name="eventhubId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventhubId"></a>

```java
public java.lang.String getEventhubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventhub_id KustoEventgridDataConnection#eventhub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#location KustoEventgridDataConnection#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#name KustoEventgridDataConnection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#resource_group_name KustoEventgridDataConnection#resource_group_name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.storageAccountId"></a>

```java
public java.lang.String getStorageAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#storage_account_id KustoEventgridDataConnection#storage_account_id}.

---

##### `blobStorageEventType`<sup>Optional</sup> <a name="blobStorageEventType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.blobStorageEventType"></a>

```java
public java.lang.String getBlobStorageEventType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#blob_storage_event_type KustoEventgridDataConnection#blob_storage_event_type}.

---

##### `databaseRoutingType`<sup>Optional</sup> <a name="databaseRoutingType" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.databaseRoutingType"></a>

```java
public java.lang.String getDatabaseRoutingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#database_routing_type KustoEventgridDataConnection#database_routing_type}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.dataFormat"></a>

```java
public java.lang.String getDataFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#data_format KustoEventgridDataConnection#data_format}.

---

##### `eventgridResourceId`<sup>Optional</sup> <a name="eventgridResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.eventgridResourceId"></a>

```java
public java.lang.String getEventgridResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#eventgrid_resource_id KustoEventgridDataConnection#eventgrid_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#id KustoEventgridDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedIdentityResourceId`<sup>Optional</sup> <a name="managedIdentityResourceId" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.managedIdentityResourceId"></a>

```java
public java.lang.String getManagedIdentityResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#managed_identity_resource_id KustoEventgridDataConnection#managed_identity_resource_id}.

---

##### `mappingRuleName`<sup>Optional</sup> <a name="mappingRuleName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.mappingRuleName"></a>

```java
public java.lang.String getMappingRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#mapping_rule_name KustoEventgridDataConnection#mapping_rule_name}.

---

##### `skipFirstRecord`<sup>Optional</sup> <a name="skipFirstRecord" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.skipFirstRecord"></a>

```java
public java.lang.Object getSkipFirstRecord();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#skip_first_record KustoEventgridDataConnection#skip_first_record}.

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#table_name KustoEventgridDataConnection#table_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionConfig.property.timeouts"></a>

```java
public KustoEventgridDataConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#timeouts KustoEventgridDataConnection#timeouts}

---

### KustoEventgridDataConnectionTimeouts <a name="KustoEventgridDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnectionTimeouts;

KustoEventgridDataConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#create KustoEventgridDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#delete KustoEventgridDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#read KustoEventgridDataConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#update KustoEventgridDataConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#create KustoEventgridDataConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#delete KustoEventgridDataConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#read KustoEventgridDataConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.64.0/docs/resources/kusto_eventgrid_data_connection#update KustoEventgridDataConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoEventgridDataConnectionTimeoutsOutputReference <a name="KustoEventgridDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.kusto_eventgrid_data_connection.KustoEventgridDataConnectionTimeoutsOutputReference;

new KustoEventgridDataConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.kustoEventgridDataConnection.KustoEventgridDataConnectionTimeouts">KustoEventgridDataConnectionTimeouts</a>

---



