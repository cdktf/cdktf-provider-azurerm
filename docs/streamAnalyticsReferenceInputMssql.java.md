# `streamAnalyticsReferenceInputMssql` Submodule <a name="`streamAnalyticsReferenceInputMssql` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsReferenceInputMssql <a name="StreamAnalyticsReferenceInputMssql" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql azurerm_stream_analytics_reference_input_mssql}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssql;

StreamAnalyticsReferenceInputMssql.Builder.create(Construct scope, java.lang.String id)
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
    .database(java.lang.String)
    .fullSnapshotQuery(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .refreshType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .server(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .username(java.lang.String)
//  .deltaSnapshotQuery(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalDuration(java.lang.String)
//  .table(java.lang.String)
//  .timeouts(StreamAnalyticsReferenceInputMssqlTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.fullSnapshotQuery">fullSnapshotQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshType">refreshType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.deltaSnapshotQuery">deltaSnapshotQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshIntervalDuration">refreshIntervalDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.database"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}.

---

##### `fullSnapshotQuery`<sup>Required</sup> <a name="fullSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.fullSnapshotQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}.

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.server"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.streamAnalyticsJobName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}.

---

##### `deltaSnapshotQuery`<sup>Optional</sup> <a name="deltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.deltaSnapshotQuery"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalDuration`<sup>Optional</sup> <a name="refreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.refreshIntervalDuration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.table"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery">resetDeltaSnapshotQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration">resetRefreshIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable">resetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts"></a>

```java
public void putTimeouts(StreamAnalyticsReferenceInputMssqlTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

---

##### `resetDeltaSnapshotQuery` <a name="resetDeltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetDeltaSnapshotQuery"></a>

```java
public void resetDeltaSnapshotQuery()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetId"></a>

```java
public void resetId()
```

##### `resetRefreshIntervalDuration` <a name="resetRefreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetRefreshIntervalDuration"></a>

```java
public void resetRefreshIntervalDuration()
```

##### `resetTable` <a name="resetTable" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTable"></a>

```java
public void resetTable()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssql;

StreamAnalyticsReferenceInputMssql.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssql;

StreamAnalyticsReferenceInputMssql.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssql;

StreamAnalyticsReferenceInputMssql.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssql;

StreamAnalyticsReferenceInputMssql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StreamAnalyticsReferenceInputMssql.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StreamAnalyticsReferenceInputMssql resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StreamAnalyticsReferenceInputMssql to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StreamAnalyticsReferenceInputMssql that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsReferenceInputMssql to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput">deltaSnapshotQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput">fullSnapshotQueryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput">refreshIntervalDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput">refreshTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput">streamAnalyticsJobNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput">tableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery">deltaSnapshotQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery">fullSnapshotQuery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration">refreshIntervalDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType">refreshType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table">table</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeouts"></a>

```java
public StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference">StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `deltaSnapshotQueryInput`<sup>Optional</sup> <a name="deltaSnapshotQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQueryInput"></a>

```java
public java.lang.String getDeltaSnapshotQueryInput();
```

- *Type:* java.lang.String

---

##### `fullSnapshotQueryInput`<sup>Optional</sup> <a name="fullSnapshotQueryInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQueryInput"></a>

```java
public java.lang.String getFullSnapshotQueryInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `refreshIntervalDurationInput`<sup>Optional</sup> <a name="refreshIntervalDurationInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDurationInput"></a>

```java
public java.lang.String getRefreshIntervalDurationInput();
```

- *Type:* java.lang.String

---

##### `refreshTypeInput`<sup>Optional</sup> <a name="refreshTypeInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshTypeInput"></a>

```java
public java.lang.String getRefreshTypeInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobNameInput`<sup>Optional</sup> <a name="streamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobNameInput"></a>

```java
public java.lang.String getStreamAnalyticsJobNameInput();
```

- *Type:* java.lang.String

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tableInput"></a>

```java
public java.lang.String getTableInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `deltaSnapshotQuery`<sup>Required</sup> <a name="deltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.deltaSnapshotQuery"></a>

```java
public java.lang.String getDeltaSnapshotQuery();
```

- *Type:* java.lang.String

---

##### `fullSnapshotQuery`<sup>Required</sup> <a name="fullSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.fullSnapshotQuery"></a>

```java
public java.lang.String getFullSnapshotQuery();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `refreshIntervalDuration`<sup>Required</sup> <a name="refreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshIntervalDuration"></a>

```java
public java.lang.String getRefreshIntervalDuration();
```

- *Type:* java.lang.String

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.refreshType"></a>

```java
public java.lang.String getRefreshType();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssql.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsReferenceInputMssqlConfig <a name="StreamAnalyticsReferenceInputMssqlConfig" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssqlConfig;

StreamAnalyticsReferenceInputMssqlConfig.builder()
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
    .database(java.lang.String)
    .fullSnapshotQuery(java.lang.String)
    .name(java.lang.String)
    .password(java.lang.String)
    .refreshType(java.lang.String)
    .resourceGroupName(java.lang.String)
    .server(java.lang.String)
    .streamAnalyticsJobName(java.lang.String)
    .username(java.lang.String)
//  .deltaSnapshotQuery(java.lang.String)
//  .id(java.lang.String)
//  .refreshIntervalDuration(java.lang.String)
//  .table(java.lang.String)
//  .timeouts(StreamAnalyticsReferenceInputMssqlTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database">database</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery">fullSnapshotQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType">refreshType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server">server</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName">streamAnalyticsJobName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery">deltaSnapshotQuery</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration">refreshIntervalDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table">table</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#database StreamAnalyticsReferenceInputMssql#database}.

---

##### `fullSnapshotQuery`<sup>Required</sup> <a name="fullSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.fullSnapshotQuery"></a>

```java
public java.lang.String getFullSnapshotQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#full_snapshot_query StreamAnalyticsReferenceInputMssql#full_snapshot_query}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#name StreamAnalyticsReferenceInputMssql#name}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#password StreamAnalyticsReferenceInputMssql#password}.

---

##### `refreshType`<sup>Required</sup> <a name="refreshType" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshType"></a>

```java
public java.lang.String getRefreshType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_type StreamAnalyticsReferenceInputMssql#refresh_type}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#resource_group_name StreamAnalyticsReferenceInputMssql#resource_group_name}.

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#server StreamAnalyticsReferenceInputMssql#server}.

---

##### `streamAnalyticsJobName`<sup>Required</sup> <a name="streamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.streamAnalyticsJobName"></a>

```java
public java.lang.String getStreamAnalyticsJobName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#stream_analytics_job_name StreamAnalyticsReferenceInputMssql#stream_analytics_job_name}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#username StreamAnalyticsReferenceInputMssql#username}.

---

##### `deltaSnapshotQuery`<sup>Optional</sup> <a name="deltaSnapshotQuery" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.deltaSnapshotQuery"></a>

```java
public java.lang.String getDeltaSnapshotQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delta_snapshot_query StreamAnalyticsReferenceInputMssql#delta_snapshot_query}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#id StreamAnalyticsReferenceInputMssql#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refreshIntervalDuration`<sup>Optional</sup> <a name="refreshIntervalDuration" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.refreshIntervalDuration"></a>

```java
public java.lang.String getRefreshIntervalDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#refresh_interval_duration StreamAnalyticsReferenceInputMssql#refresh_interval_duration}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.table"></a>

```java
public java.lang.String getTable();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#table StreamAnalyticsReferenceInputMssql#table}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlConfig.property.timeouts"></a>

```java
public StreamAnalyticsReferenceInputMssqlTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#timeouts StreamAnalyticsReferenceInputMssql#timeouts}

---

### StreamAnalyticsReferenceInputMssqlTimeouts <a name="StreamAnalyticsReferenceInputMssqlTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssqlTimeouts;

StreamAnalyticsReferenceInputMssqlTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#create StreamAnalyticsReferenceInputMssql#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#delete StreamAnalyticsReferenceInputMssql#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#read StreamAnalyticsReferenceInputMssql#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.7.0/docs/resources/stream_analytics_reference_input_mssql#update StreamAnalyticsReferenceInputMssql#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference <a name="StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.stream_analytics_reference_input_mssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference;

new StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.streamAnalyticsReferenceInputMssql.StreamAnalyticsReferenceInputMssqlTimeouts">StreamAnalyticsReferenceInputMssqlTimeouts</a>

---



