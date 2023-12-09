# `sqlDatabase` Submodule <a name="`sqlDatabase` Submodule" id="@cdktf/provider-azurerm.sqlDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlDatabase <a name="SqlDatabase" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database azurerm_sql_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabase;

SqlDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .edition(java.lang.String)
//  .elasticPoolName(java.lang.String)
//  .id(java.lang.String)
//  .import(SqlDatabaseImport)
//  .maxSizeBytes(java.lang.String)
//  .maxSizeGb(java.lang.String)
//  .readScale(java.lang.Boolean)
//  .readScale(IResolvable)
//  .requestedServiceObjectiveId(java.lang.String)
//  .requestedServiceObjectiveName(java.lang.String)
//  .restorePointInTime(java.lang.String)
//  .sourceDatabaseDeletionDate(java.lang.String)
//  .sourceDatabaseId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threatDetectionPolicy(SqlDatabaseThreatDetectionPolicy)
//  .timeouts(SqlDatabaseTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#location SqlDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#name SqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#server_name SqlDatabase#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#collation SqlDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#edition SqlDatabase#edition}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.elasticPoolName">elasticPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#id SqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.readScale">readScale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.requestedServiceObjectiveId">requestedServiceObjectiveId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.requestedServiceObjectiveName">requestedServiceObjectiveName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.restorePointInTime">restorePointInTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.sourceDatabaseDeletionDate">sourceDatabaseDeletionDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#tags SqlDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#location SqlDatabase#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#name SqlDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.serverName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#server_name SqlDatabase#server_name}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.collation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#collation SqlDatabase#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.createMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.edition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#edition SqlDatabase#edition}.

---

##### `elasticPoolName`<sup>Optional</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.elasticPoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#id SqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.import"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#import SqlDatabase#import}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.maxSizeBytes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.maxSizeGb"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}.

---

##### `readScale`<sup>Optional</sup> <a name="readScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.readScale"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}.

---

##### `requestedServiceObjectiveId`<sup>Optional</sup> <a name="requestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.requestedServiceObjectiveId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}.

---

##### `requestedServiceObjectiveName`<sup>Optional</sup> <a name="requestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.requestedServiceObjectiveName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.restorePointInTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}.

---

##### `sourceDatabaseDeletionDate`<sup>Optional</sup> <a name="sourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.sourceDatabaseDeletionDate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}.

---

##### `sourceDatabaseId`<sup>Optional</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.sourceDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#tags SqlDatabase#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.threatDetectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#threat_detection_policy SqlDatabase#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#timeouts SqlDatabase#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.Initializer.parameter.zoneRedundant"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport">putImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy">putThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCollation">resetCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetEdition">resetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetElasticPoolName">resetElasticPoolName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetImport">resetImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeBytes">resetMaxSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeGb">resetMaxSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetReadScale">resetReadScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveId">resetRequestedServiceObjectiveId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveName">resetRequestedServiceObjectiveName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRestorePointInTime">resetRestorePointInTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseDeletionDate">resetSourceDatabaseDeletionDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseId">resetSourceDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetThreatDetectionPolicy">resetThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetZoneRedundant">resetZoneRedundant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImport` <a name="putImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport"></a>

```java
public void putImport(SqlDatabaseImport value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---

##### `putThreatDetectionPolicy` <a name="putThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy"></a>

```java
public void putThreatDetectionPolicy(SqlDatabaseThreatDetectionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putThreatDetectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts"></a>

```java
public void putTimeouts(SqlDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---

##### `resetCollation` <a name="resetCollation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCollation"></a>

```java
public void resetCollation()
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetCreateMode"></a>

```java
public void resetCreateMode()
```

##### `resetEdition` <a name="resetEdition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetEdition"></a>

```java
public void resetEdition()
```

##### `resetElasticPoolName` <a name="resetElasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetElasticPoolName"></a>

```java
public void resetElasticPoolName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetImport` <a name="resetImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetImport"></a>

```java
public void resetImport()
```

##### `resetMaxSizeBytes` <a name="resetMaxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeBytes"></a>

```java
public void resetMaxSizeBytes()
```

##### `resetMaxSizeGb` <a name="resetMaxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetMaxSizeGb"></a>

```java
public void resetMaxSizeGb()
```

##### `resetReadScale` <a name="resetReadScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetReadScale"></a>

```java
public void resetReadScale()
```

##### `resetRequestedServiceObjectiveId` <a name="resetRequestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveId"></a>

```java
public void resetRequestedServiceObjectiveId()
```

##### `resetRequestedServiceObjectiveName` <a name="resetRequestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRequestedServiceObjectiveName"></a>

```java
public void resetRequestedServiceObjectiveName()
```

##### `resetRestorePointInTime` <a name="resetRestorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetRestorePointInTime"></a>

```java
public void resetRestorePointInTime()
```

##### `resetSourceDatabaseDeletionDate` <a name="resetSourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseDeletionDate"></a>

```java
public void resetSourceDatabaseDeletionDate()
```

##### `resetSourceDatabaseId` <a name="resetSourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetSourceDatabaseId"></a>

```java
public void resetSourceDatabaseId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTags"></a>

```java
public void resetTags()
```

##### `resetThreatDetectionPolicy` <a name="resetThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetThreatDetectionPolicy"></a>

```java
public void resetThreatDetectionPolicy()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZoneRedundant` <a name="resetZoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.resetZoneRedundant"></a>

```java
public void resetZoneRedundant()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabase;

SqlDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabase;

SqlDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabase;

SqlDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabase;

SqlDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.defaultSecondaryLocation">defaultSecondaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.encryption">encryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference">SqlDatabaseImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference">SqlDatabaseThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference">SqlDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collationInput">collationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createModeInput">createModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.editionInput">editionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolNameInput">elasticPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.importInput">importInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytesInput">maxSizeBytesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGbInput">maxSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScaleInput">readScaleInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveIdInput">requestedServiceObjectiveIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveNameInput">requestedServiceObjectiveNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTimeInput">restorePointInTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverNameInput">serverNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDateInput">sourceDatabaseDeletionDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseIdInput">sourceDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicyInput">threatDetectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundantInput">zoneRedundantInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collation">collation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createMode">createMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolName">elasticPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScale">readScale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveId">requestedServiceObjectiveId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveName">requestedServiceObjectiveName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTime">restorePointInTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverName">serverName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDate">sourceDatabaseDeletionDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `defaultSecondaryLocation`<sup>Required</sup> <a name="defaultSecondaryLocation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.defaultSecondaryLocation"></a>

```java
public java.lang.String getDefaultSecondaryLocation();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

---

##### `import`<sup>Required</sup> <a name="import" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.import"></a>

```java
public SqlDatabaseImportOutputReference getImport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference">SqlDatabaseImportOutputReference</a>

---

##### `threatDetectionPolicy`<sup>Required</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicy"></a>

```java
public SqlDatabaseThreatDetectionPolicyOutputReference getThreatDetectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference">SqlDatabaseThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeouts"></a>

```java
public SqlDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference">SqlDatabaseTimeoutsOutputReference</a>

---

##### `collationInput`<sup>Optional</sup> <a name="collationInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collationInput"></a>

```java
public java.lang.String getCollationInput();
```

- *Type:* java.lang.String

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createModeInput"></a>

```java
public java.lang.String getCreateModeInput();
```

- *Type:* java.lang.String

---

##### `editionInput`<sup>Optional</sup> <a name="editionInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.editionInput"></a>

```java
public java.lang.String getEditionInput();
```

- *Type:* java.lang.String

---

##### `elasticPoolNameInput`<sup>Optional</sup> <a name="elasticPoolNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolNameInput"></a>

```java
public java.lang.String getElasticPoolNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `importInput`<sup>Optional</sup> <a name="importInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.importInput"></a>

```java
public SqlDatabaseImport getImportInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maxSizeBytesInput`<sup>Optional</sup> <a name="maxSizeBytesInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytesInput"></a>

```java
public java.lang.String getMaxSizeBytesInput();
```

- *Type:* java.lang.String

---

##### `maxSizeGbInput`<sup>Optional</sup> <a name="maxSizeGbInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGbInput"></a>

```java
public java.lang.String getMaxSizeGbInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `readScaleInput`<sup>Optional</sup> <a name="readScaleInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScaleInput"></a>

```java
public java.lang.Object getReadScaleInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestedServiceObjectiveIdInput`<sup>Optional</sup> <a name="requestedServiceObjectiveIdInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveIdInput"></a>

```java
public java.lang.String getRequestedServiceObjectiveIdInput();
```

- *Type:* java.lang.String

---

##### `requestedServiceObjectiveNameInput`<sup>Optional</sup> <a name="requestedServiceObjectiveNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveNameInput"></a>

```java
public java.lang.String getRequestedServiceObjectiveNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `restorePointInTimeInput`<sup>Optional</sup> <a name="restorePointInTimeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTimeInput"></a>

```java
public java.lang.String getRestorePointInTimeInput();
```

- *Type:* java.lang.String

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverNameInput"></a>

```java
public java.lang.String getServerNameInput();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseDeletionDateInput`<sup>Optional</sup> <a name="sourceDatabaseDeletionDateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDateInput"></a>

```java
public java.lang.String getSourceDatabaseDeletionDateInput();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseIdInput`<sup>Optional</sup> <a name="sourceDatabaseIdInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseIdInput"></a>

```java
public java.lang.String getSourceDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `threatDetectionPolicyInput`<sup>Optional</sup> <a name="threatDetectionPolicyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.threatDetectionPolicyInput"></a>

```java
public SqlDatabaseThreatDetectionPolicy getThreatDetectionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---

##### `zoneRedundantInput`<sup>Optional</sup> <a name="zoneRedundantInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundantInput"></a>

```java
public java.lang.Object getZoneRedundantInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `elasticPoolName`<sup>Required</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.elasticPoolName"></a>

```java
public java.lang.String getElasticPoolName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `maxSizeBytes`<sup>Required</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeBytes"></a>

```java
public java.lang.String getMaxSizeBytes();
```

- *Type:* java.lang.String

---

##### `maxSizeGb`<sup>Required</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.maxSizeGb"></a>

```java
public java.lang.String getMaxSizeGb();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `readScale`<sup>Required</sup> <a name="readScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.readScale"></a>

```java
public java.lang.Object getReadScale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requestedServiceObjectiveId`<sup>Required</sup> <a name="requestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveId"></a>

```java
public java.lang.String getRequestedServiceObjectiveId();
```

- *Type:* java.lang.String

---

##### `requestedServiceObjectiveName`<sup>Required</sup> <a name="requestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.requestedServiceObjectiveName"></a>

```java
public java.lang.String getRequestedServiceObjectiveName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `restorePointInTime`<sup>Required</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.restorePointInTime"></a>

```java
public java.lang.String getRestorePointInTime();
```

- *Type:* java.lang.String

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseDeletionDate`<sup>Required</sup> <a name="sourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseDeletionDate"></a>

```java
public java.lang.String getSourceDatabaseDeletionDate();
```

- *Type:* java.lang.String

---

##### `sourceDatabaseId`<sup>Required</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zoneRedundant`<sup>Required</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlDatabaseConfig <a name="SqlDatabaseConfig" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseConfig;

SqlDatabaseConfig.builder()
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
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .serverName(java.lang.String)
//  .collation(java.lang.String)
//  .createMode(java.lang.String)
//  .edition(java.lang.String)
//  .elasticPoolName(java.lang.String)
//  .id(java.lang.String)
//  .import(SqlDatabaseImport)
//  .maxSizeBytes(java.lang.String)
//  .maxSizeGb(java.lang.String)
//  .readScale(java.lang.Boolean)
//  .readScale(IResolvable)
//  .requestedServiceObjectiveId(java.lang.String)
//  .requestedServiceObjectiveName(java.lang.String)
//  .restorePointInTime(java.lang.String)
//  .sourceDatabaseDeletionDate(java.lang.String)
//  .sourceDatabaseId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .threatDetectionPolicy(SqlDatabaseThreatDetectionPolicy)
//  .timeouts(SqlDatabaseTimeouts)
//  .zoneRedundant(java.lang.Boolean)
//  .zoneRedundant(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#location SqlDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#name SqlDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.serverName">serverName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#server_name SqlDatabase#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.collation">collation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#collation SqlDatabase#collation}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.edition">edition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#edition SqlDatabase#edition}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.elasticPoolName">elasticPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#id SqlDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.import">import</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | import block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeBytes">maxSizeBytes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeGb">maxSizeGb</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.readScale">readScale</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveId">requestedServiceObjectiveId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveName">requestedServiceObjectiveName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.restorePointInTime">restorePointInTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseDeletionDate">sourceDatabaseDeletionDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseId">sourceDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#tags SqlDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.threatDetectionPolicy">threatDetectionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.zoneRedundant">zoneRedundant</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#location SqlDatabase#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#name SqlDatabase#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#resource_group_name SqlDatabase#resource_group_name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.serverName"></a>

```java
public java.lang.String getServerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#server_name SqlDatabase#server_name}.

---

##### `collation`<sup>Optional</sup> <a name="collation" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.collation"></a>

```java
public java.lang.String getCollation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#collation SqlDatabase#collation}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create_mode SqlDatabase#create_mode}.

---

##### `edition`<sup>Optional</sup> <a name="edition" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#edition SqlDatabase#edition}.

---

##### `elasticPoolName`<sup>Optional</sup> <a name="elasticPoolName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.elasticPoolName"></a>

```java
public java.lang.String getElasticPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#elastic_pool_name SqlDatabase#elastic_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#id SqlDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `import`<sup>Optional</sup> <a name="import" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.import"></a>

```java
public SqlDatabaseImport getImport();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#import SqlDatabase#import}

---

##### `maxSizeBytes`<sup>Optional</sup> <a name="maxSizeBytes" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeBytes"></a>

```java
public java.lang.String getMaxSizeBytes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_bytes SqlDatabase#max_size_bytes}.

---

##### `maxSizeGb`<sup>Optional</sup> <a name="maxSizeGb" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.maxSizeGb"></a>

```java
public java.lang.String getMaxSizeGb();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#max_size_gb SqlDatabase#max_size_gb}.

---

##### `readScale`<sup>Optional</sup> <a name="readScale" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.readScale"></a>

```java
public java.lang.Object getReadScale();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read_scale SqlDatabase#read_scale}.

---

##### `requestedServiceObjectiveId`<sup>Optional</sup> <a name="requestedServiceObjectiveId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveId"></a>

```java
public java.lang.String getRequestedServiceObjectiveId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_id SqlDatabase#requested_service_objective_id}.

---

##### `requestedServiceObjectiveName`<sup>Optional</sup> <a name="requestedServiceObjectiveName" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.requestedServiceObjectiveName"></a>

```java
public java.lang.String getRequestedServiceObjectiveName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#requested_service_objective_name SqlDatabase#requested_service_objective_name}.

---

##### `restorePointInTime`<sup>Optional</sup> <a name="restorePointInTime" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.restorePointInTime"></a>

```java
public java.lang.String getRestorePointInTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#restore_point_in_time SqlDatabase#restore_point_in_time}.

---

##### `sourceDatabaseDeletionDate`<sup>Optional</sup> <a name="sourceDatabaseDeletionDate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseDeletionDate"></a>

```java
public java.lang.String getSourceDatabaseDeletionDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_deletion_date SqlDatabase#source_database_deletion_date}.

---

##### `sourceDatabaseId`<sup>Optional</sup> <a name="sourceDatabaseId" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.sourceDatabaseId"></a>

```java
public java.lang.String getSourceDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#source_database_id SqlDatabase#source_database_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#tags SqlDatabase#tags}.

---

##### `threatDetectionPolicy`<sup>Optional</sup> <a name="threatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.threatDetectionPolicy"></a>

```java
public SqlDatabaseThreatDetectionPolicy getThreatDetectionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#threat_detection_policy SqlDatabase#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.timeouts"></a>

```java
public SqlDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#timeouts SqlDatabase#timeouts}

---

##### `zoneRedundant`<sup>Optional</sup> <a name="zoneRedundant" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseConfig.property.zoneRedundant"></a>

```java
public java.lang.Object getZoneRedundant();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#zone_redundant SqlDatabase#zone_redundant}.

---

### SqlDatabaseImport <a name="SqlDatabaseImport" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseImport;

SqlDatabaseImport.builder()
    .administratorLogin(java.lang.String)
    .administratorLoginPassword(java.lang.String)
    .authenticationType(java.lang.String)
    .storageKey(java.lang.String)
    .storageKeyType(java.lang.String)
    .storageUri(java.lang.String)
//  .operationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#administrator_login SqlDatabase#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#administrator_login_password SqlDatabase#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#authentication_type SqlDatabase#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKey">storageKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_key SqlDatabase#storage_key}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKeyType">storageKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_key_type SqlDatabase#storage_key_type}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageUri">storageUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_uri SqlDatabase#storage_uri}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.operationMode">operationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#operation_mode SqlDatabase#operation_mode}. |

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#administrator_login SqlDatabase#administrator_login}.

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#administrator_login_password SqlDatabase#administrator_login_password}.

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#authentication_type SqlDatabase#authentication_type}.

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKey"></a>

```java
public java.lang.String getStorageKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_key SqlDatabase#storage_key}.

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageKeyType"></a>

```java
public java.lang.String getStorageKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_key_type SqlDatabase#storage_key_type}.

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.storageUri"></a>

```java
public java.lang.String getStorageUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_uri SqlDatabase#storage_uri}.

---

##### `operationMode`<sup>Optional</sup> <a name="operationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport.property.operationMode"></a>

```java
public java.lang.String getOperationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#operation_mode SqlDatabase#operation_mode}.

---

### SqlDatabaseThreatDetectionPolicy <a name="SqlDatabaseThreatDetectionPolicy" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseThreatDetectionPolicy;

SqlDatabaseThreatDetectionPolicy.builder()
//  .disabledAlerts(java.util.List<java.lang.String>)
//  .emailAccountAdmins(java.lang.String)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .retentionDays(java.lang.Number)
//  .state(java.lang.String)
//  .storageAccountAccessKey(java.lang.String)
//  .storageEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#disabled_alerts SqlDatabase#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#email_account_admins SqlDatabase#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#email_addresses SqlDatabase#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#retention_days SqlDatabase#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#state SqlDatabase#state}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_account_access_key SqlDatabase#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_endpoint SqlDatabase#storage_endpoint}. |

---

##### `disabledAlerts`<sup>Optional</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#disabled_alerts SqlDatabase#disabled_alerts}.

---

##### `emailAccountAdmins`<sup>Optional</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAccountAdmins"></a>

```java
public java.lang.String getEmailAccountAdmins();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#email_account_admins SqlDatabase#email_account_admins}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#email_addresses SqlDatabase#email_addresses}.

---

##### `retentionDays`<sup>Optional</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#retention_days SqlDatabase#retention_days}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#state SqlDatabase#state}.

---

##### `storageAccountAccessKey`<sup>Optional</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_account_access_key SqlDatabase#storage_account_access_key}.

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#storage_endpoint SqlDatabase#storage_endpoint}.

---

### SqlDatabaseTimeouts <a name="SqlDatabaseTimeouts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseTimeouts;

SqlDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create SqlDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#delete SqlDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read SqlDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#update SqlDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#create SqlDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#delete SqlDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#read SqlDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/sql_database#update SqlDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlDatabaseImportOutputReference <a name="SqlDatabaseImportOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseImportOutputReference;

new SqlDatabaseImportOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resetOperationMode">resetOperationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperationMode` <a name="resetOperationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.resetOperationMode"></a>

```java
public void resetOperationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginInput">administratorLoginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPasswordInput">administratorLoginPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationModeInput">operationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyInput">storageKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyTypeInput">storageKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUriInput">storageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLogin">administratorLogin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPassword">administratorLoginPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationMode">operationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKey">storageKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyType">storageKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUri">storageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `administratorLoginInput`<sup>Optional</sup> <a name="administratorLoginInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginInput"></a>

```java
public java.lang.String getAdministratorLoginInput();
```

- *Type:* java.lang.String

---

##### `administratorLoginPasswordInput`<sup>Optional</sup> <a name="administratorLoginPasswordInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPasswordInput"></a>

```java
public java.lang.String getAdministratorLoginPasswordInput();
```

- *Type:* java.lang.String

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `operationModeInput`<sup>Optional</sup> <a name="operationModeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationModeInput"></a>

```java
public java.lang.String getOperationModeInput();
```

- *Type:* java.lang.String

---

##### `storageKeyInput`<sup>Optional</sup> <a name="storageKeyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyInput"></a>

```java
public java.lang.String getStorageKeyInput();
```

- *Type:* java.lang.String

---

##### `storageKeyTypeInput`<sup>Optional</sup> <a name="storageKeyTypeInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyTypeInput"></a>

```java
public java.lang.String getStorageKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `storageUriInput`<sup>Optional</sup> <a name="storageUriInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUriInput"></a>

```java
public java.lang.String getStorageUriInput();
```

- *Type:* java.lang.String

---

##### `administratorLogin`<sup>Required</sup> <a name="administratorLogin" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLogin"></a>

```java
public java.lang.String getAdministratorLogin();
```

- *Type:* java.lang.String

---

##### `administratorLoginPassword`<sup>Required</sup> <a name="administratorLoginPassword" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.administratorLoginPassword"></a>

```java
public java.lang.String getAdministratorLoginPassword();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `operationMode`<sup>Required</sup> <a name="operationMode" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.operationMode"></a>

```java
public java.lang.String getOperationMode();
```

- *Type:* java.lang.String

---

##### `storageKey`<sup>Required</sup> <a name="storageKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKey"></a>

```java
public java.lang.String getStorageKey();
```

- *Type:* java.lang.String

---

##### `storageKeyType`<sup>Required</sup> <a name="storageKeyType" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageKeyType"></a>

```java
public java.lang.String getStorageKeyType();
```

- *Type:* java.lang.String

---

##### `storageUri`<sup>Required</sup> <a name="storageUri" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.storageUri"></a>

```java
public java.lang.String getStorageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImportOutputReference.property.internalValue"></a>

```java
public SqlDatabaseImport getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseImport">SqlDatabaseImport</a>

---


### SqlDatabaseThreatDetectionPolicyOutputReference <a name="SqlDatabaseThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseThreatDetectionPolicyOutputReference;

new SqlDatabaseThreatDetectionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts">resetDisabledAlerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">resetEmailAccountAdmins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays">resetRetentionDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">resetStorageAccountAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledAlerts` <a name="resetDisabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```java
public void resetDisabledAlerts()
```

##### `resetEmailAccountAdmins` <a name="resetEmailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```java
public void resetEmailAccountAdmins()
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetRetentionDays` <a name="resetRetentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```java
public void resetRetentionDays()
```

##### `resetState` <a name="resetState" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetState"></a>

```java
public void resetState()
```

##### `resetStorageAccountAccessKey` <a name="resetStorageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```java
public void resetStorageAccountAccessKey()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabledAlertsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">emailAccountAdminsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storageAccountAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts">disabledAlerts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins">emailAccountAdmins</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storageAccountAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledAlertsInput`<sup>Optional</sup> <a name="disabledAlertsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledAlertsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdminsInput`<sup>Optional</sup> <a name="emailAccountAdminsInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```java
public java.lang.String getEmailAccountAdminsInput();
```

- *Type:* java.lang.String

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKeyInput`<sup>Optional</sup> <a name="storageAccountAccessKeyInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```java
public java.lang.String getStorageAccountAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `disabledAlerts`<sup>Required</sup> <a name="disabledAlerts" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```java
public java.util.List<java.lang.String> getDisabledAlerts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAccountAdmins`<sup>Required</sup> <a name="emailAccountAdmins" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```java
public java.lang.String getEmailAccountAdmins();
```

- *Type:* java.lang.String

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageAccountAccessKey`<sup>Required</sup> <a name="storageAccountAccessKey" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```java
public java.lang.String getStorageAccountAccessKey();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Required</sup> <a name="storageEndpoint" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicyOutputReference.property.internalValue"></a>

```java
public SqlDatabaseThreatDetectionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseThreatDetectionPolicy">SqlDatabaseThreatDetectionPolicy</a>

---


### SqlDatabaseTimeoutsOutputReference <a name="SqlDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.sql_database.SqlDatabaseTimeoutsOutputReference;

new SqlDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.sqlDatabase.SqlDatabaseTimeouts">SqlDatabaseTimeouts</a>

---



