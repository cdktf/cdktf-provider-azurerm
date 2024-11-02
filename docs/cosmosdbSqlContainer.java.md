# `cosmosdbSqlContainer` Submodule <a name="`cosmosdbSqlContainer` Submodule" id="@cdktf/provider-azurerm.cosmosdbSqlContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbSqlContainer <a name="CosmosdbSqlContainer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container azurerm_cosmosdb_sql_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainer;

CosmosdbSqlContainer.Builder.create(Construct scope, java.lang.String id)
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
    .accountName(java.lang.String)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .partitionKeyPaths(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
//  .analyticalStorageTtl(java.lang.Number)
//  .autoscaleSettings(CosmosdbSqlContainerAutoscaleSettings)
//  .conflictResolutionPolicy(CosmosdbSqlContainerConflictResolutionPolicy)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .indexingPolicy(CosmosdbSqlContainerIndexingPolicy)
//  .partitionKeyKind(java.lang.String)
//  .partitionKeyVersion(java.lang.Number)
//  .throughput(java.lang.Number)
//  .timeouts(CosmosdbSqlContainerTimeouts)
//  .uniqueKey(IResolvable)
//  .uniqueKey(java.util.List<CosmosdbSqlContainerUniqueKey>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyPaths">partitionKeyPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_paths CosmosdbSqlContainer#partition_key_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.conflictResolutionPolicy">conflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.indexingPolicy">indexingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | indexing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyKind">partitionKeyKind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_kind CosmosdbSqlContainer#partition_key_kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyVersion">partitionKeyVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.uniqueKey">uniqueKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>></code> | unique_key block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}.

---

##### `partitionKeyPaths`<sup>Required</sup> <a name="partitionKeyPaths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyPaths"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_paths CosmosdbSqlContainer#partition_key_paths}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.analyticalStorageTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.autoscaleSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#autoscale_settings CosmosdbSqlContainer#autoscale_settings}

---

##### `conflictResolutionPolicy`<sup>Optional</sup> <a name="conflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.conflictResolutionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_policy CosmosdbSqlContainer#conflict_resolution_policy}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.defaultTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexingPolicy`<sup>Optional</sup> <a name="indexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.indexingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

indexing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#indexing_policy CosmosdbSqlContainer#indexing_policy}

---

##### `partitionKeyKind`<sup>Optional</sup> <a name="partitionKeyKind" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyKind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_kind CosmosdbSqlContainer#partition_key_kind}.

---

##### `partitionKeyVersion`<sup>Optional</sup> <a name="partitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.partitionKeyVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.throughput"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#timeouts CosmosdbSqlContainer#timeouts}

---

##### `uniqueKey`<sup>Optional</sup> <a name="uniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.Initializer.parameter.uniqueKey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>>

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#unique_key CosmosdbSqlContainer#unique_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings">putAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy">putConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy">putIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey">putUniqueKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAnalyticalStorageTtl">resetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAutoscaleSettings">resetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetConflictResolutionPolicy">resetConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetIndexingPolicy">resetIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyKind">resetPartitionKeyKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyVersion">resetPartitionKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetUniqueKey">resetUniqueKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleSettings` <a name="putAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings"></a>

```java
public void putAutoscaleSettings(CosmosdbSqlContainerAutoscaleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---

##### `putConflictResolutionPolicy` <a name="putConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy"></a>

```java
public void putConflictResolutionPolicy(CosmosdbSqlContainerConflictResolutionPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putConflictResolutionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---

##### `putIndexingPolicy` <a name="putIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy"></a>

```java
public void putIndexingPolicy(CosmosdbSqlContainerIndexingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putIndexingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts"></a>

```java
public void putTimeouts(CosmosdbSqlContainerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

---

##### `putUniqueKey` <a name="putUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey"></a>

```java
public void putUniqueKey(IResolvable OR java.util.List<CosmosdbSqlContainerUniqueKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.putUniqueKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>>

---

##### `resetAnalyticalStorageTtl` <a name="resetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAnalyticalStorageTtl"></a>

```java
public void resetAnalyticalStorageTtl()
```

##### `resetAutoscaleSettings` <a name="resetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetAutoscaleSettings"></a>

```java
public void resetAutoscaleSettings()
```

##### `resetConflictResolutionPolicy` <a name="resetConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetConflictResolutionPolicy"></a>

```java
public void resetConflictResolutionPolicy()
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetDefaultTtl"></a>

```java
public void resetDefaultTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetId"></a>

```java
public void resetId()
```

##### `resetIndexingPolicy` <a name="resetIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetIndexingPolicy"></a>

```java
public void resetIndexingPolicy()
```

##### `resetPartitionKeyKind` <a name="resetPartitionKeyKind" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyKind"></a>

```java
public void resetPartitionKeyKind()
```

##### `resetPartitionKeyVersion` <a name="resetPartitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetPartitionKeyVersion"></a>

```java
public void resetPartitionKeyVersion()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUniqueKey` <a name="resetUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.resetUniqueKey"></a>

```java
public void resetUniqueKey()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbSqlContainer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainer;

CosmosdbSqlContainer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainer;

CosmosdbSqlContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainer;

CosmosdbSqlContainer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainer;

CosmosdbSqlContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CosmosdbSqlContainer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CosmosdbSqlContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CosmosdbSqlContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CosmosdbSqlContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbSqlContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference">CosmosdbSqlContainerAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicy">conflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference">CosmosdbSqlContainerConflictResolutionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicy">indexingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference">CosmosdbSqlContainerIndexingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference">CosmosdbSqlContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKey">uniqueKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList">CosmosdbSqlContainerUniqueKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtlInput">analyticalStorageTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettingsInput">autoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicyInput">conflictResolutionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtlInput">defaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicyInput">indexingPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyKindInput">partitionKeyKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPathsInput">partitionKeyPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersionInput">partitionKeyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKeyInput">uniqueKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyKind">partitionKeyKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPaths">partitionKeyPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersion">partitionKeyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettings"></a>

```java
public CosmosdbSqlContainerAutoscaleSettingsOutputReference getAutoscaleSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference">CosmosdbSqlContainerAutoscaleSettingsOutputReference</a>

---

##### `conflictResolutionPolicy`<sup>Required</sup> <a name="conflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicy"></a>

```java
public CosmosdbSqlContainerConflictResolutionPolicyOutputReference getConflictResolutionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference">CosmosdbSqlContainerConflictResolutionPolicyOutputReference</a>

---

##### `indexingPolicy`<sup>Required</sup> <a name="indexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicy"></a>

```java
public CosmosdbSqlContainerIndexingPolicyOutputReference getIndexingPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference">CosmosdbSqlContainerIndexingPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeouts"></a>

```java
public CosmosdbSqlContainerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference">CosmosdbSqlContainerTimeoutsOutputReference</a>

---

##### `uniqueKey`<sup>Required</sup> <a name="uniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKey"></a>

```java
public CosmosdbSqlContainerUniqueKeyList getUniqueKey();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList">CosmosdbSqlContainerUniqueKeyList</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `analyticalStorageTtlInput`<sup>Optional</sup> <a name="analyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtlInput"></a>

```java
public java.lang.Number getAnalyticalStorageTtlInput();
```

- *Type:* java.lang.Number

---

##### `autoscaleSettingsInput`<sup>Optional</sup> <a name="autoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.autoscaleSettingsInput"></a>

```java
public CosmosdbSqlContainerAutoscaleSettings getAutoscaleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---

##### `conflictResolutionPolicyInput`<sup>Optional</sup> <a name="conflictResolutionPolicyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.conflictResolutionPolicyInput"></a>

```java
public CosmosdbSqlContainerConflictResolutionPolicy getConflictResolutionPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtlInput"></a>

```java
public java.lang.Number getDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexingPolicyInput`<sup>Optional</sup> <a name="indexingPolicyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.indexingPolicyInput"></a>

```java
public CosmosdbSqlContainerIndexingPolicy getIndexingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyKindInput`<sup>Optional</sup> <a name="partitionKeyKindInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyKindInput"></a>

```java
public java.lang.String getPartitionKeyKindInput();
```

- *Type:* java.lang.String

---

##### `partitionKeyPathsInput`<sup>Optional</sup> <a name="partitionKeyPathsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPathsInput"></a>

```java
public java.util.List<java.lang.String> getPartitionKeyPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `partitionKeyVersionInput`<sup>Optional</sup> <a name="partitionKeyVersionInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersionInput"></a>

```java
public java.lang.Number getPartitionKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

---

##### `uniqueKeyInput`<sup>Optional</sup> <a name="uniqueKeyInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.uniqueKeyInput"></a>

```java
public java.lang.Object getUniqueKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `analyticalStorageTtl`<sup>Required</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.analyticalStorageTtl"></a>

```java
public java.lang.Number getAnalyticalStorageTtl();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partitionKeyKind`<sup>Required</sup> <a name="partitionKeyKind" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyKind"></a>

```java
public java.lang.String getPartitionKeyKind();
```

- *Type:* java.lang.String

---

##### `partitionKeyPaths`<sup>Required</sup> <a name="partitionKeyPaths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyPaths"></a>

```java
public java.util.List<java.lang.String> getPartitionKeyPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `partitionKeyVersion`<sup>Required</sup> <a name="partitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.partitionKeyVersion"></a>

```java
public java.lang.Number getPartitionKeyVersion();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbSqlContainerAutoscaleSettings <a name="CosmosdbSqlContainerAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerAutoscaleSettings;

CosmosdbSqlContainerAutoscaleSettings.builder()
//  .maxThroughput(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#max_throughput CosmosdbSqlContainer#max_throughput}. |

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#max_throughput CosmosdbSqlContainer#max_throughput}.

---

### CosmosdbSqlContainerConfig <a name="CosmosdbSqlContainerConfig" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerConfig;

CosmosdbSqlContainerConfig.builder()
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
    .accountName(java.lang.String)
    .databaseName(java.lang.String)
    .name(java.lang.String)
    .partitionKeyPaths(java.util.List<java.lang.String>)
    .resourceGroupName(java.lang.String)
//  .analyticalStorageTtl(java.lang.Number)
//  .autoscaleSettings(CosmosdbSqlContainerAutoscaleSettings)
//  .conflictResolutionPolicy(CosmosdbSqlContainerConflictResolutionPolicy)
//  .defaultTtl(java.lang.Number)
//  .id(java.lang.String)
//  .indexingPolicy(CosmosdbSqlContainerIndexingPolicy)
//  .partitionKeyKind(java.lang.String)
//  .partitionKeyVersion(java.lang.Number)
//  .throughput(java.lang.Number)
//  .timeouts(CosmosdbSqlContainerTimeouts)
//  .uniqueKey(IResolvable)
//  .uniqueKey(java.util.List<CosmosdbSqlContainerUniqueKey>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyPaths">partitionKeyPaths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_paths CosmosdbSqlContainer#partition_key_paths}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.conflictResolutionPolicy">conflictResolutionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | conflict_resolution_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.indexingPolicy">indexingPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | indexing_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyKind">partitionKeyKind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_kind CosmosdbSqlContainer#partition_key_kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyVersion">partitionKeyVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.uniqueKey">uniqueKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>></code> | unique_key block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#account_name CosmosdbSqlContainer#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#database_name CosmosdbSqlContainer#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#name CosmosdbSqlContainer#name}.

---

##### `partitionKeyPaths`<sup>Required</sup> <a name="partitionKeyPaths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyPaths"></a>

```java
public java.util.List<java.lang.String> getPartitionKeyPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_paths CosmosdbSqlContainer#partition_key_paths}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#resource_group_name CosmosdbSqlContainer#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.analyticalStorageTtl"></a>

```java
public java.lang.Number getAnalyticalStorageTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#analytical_storage_ttl CosmosdbSqlContainer#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.autoscaleSettings"></a>

```java
public CosmosdbSqlContainerAutoscaleSettings getAutoscaleSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#autoscale_settings CosmosdbSqlContainer#autoscale_settings}

---

##### `conflictResolutionPolicy`<sup>Optional</sup> <a name="conflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.conflictResolutionPolicy"></a>

```java
public CosmosdbSqlContainerConflictResolutionPolicy getConflictResolutionPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

conflict_resolution_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_policy CosmosdbSqlContainer#conflict_resolution_policy}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#default_ttl CosmosdbSqlContainer#default_ttl}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#id CosmosdbSqlContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexingPolicy`<sup>Optional</sup> <a name="indexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.indexingPolicy"></a>

```java
public CosmosdbSqlContainerIndexingPolicy getIndexingPolicy();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

indexing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#indexing_policy CosmosdbSqlContainer#indexing_policy}

---

##### `partitionKeyKind`<sup>Optional</sup> <a name="partitionKeyKind" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyKind"></a>

```java
public java.lang.String getPartitionKeyKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_kind CosmosdbSqlContainer#partition_key_kind}.

---

##### `partitionKeyVersion`<sup>Optional</sup> <a name="partitionKeyVersion" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.partitionKeyVersion"></a>

```java
public java.lang.Number getPartitionKeyVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#partition_key_version CosmosdbSqlContainer#partition_key_version}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#throughput CosmosdbSqlContainer#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.timeouts"></a>

```java
public CosmosdbSqlContainerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#timeouts CosmosdbSqlContainer#timeouts}

---

##### `uniqueKey`<sup>Optional</sup> <a name="uniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConfig.property.uniqueKey"></a>

```java
public java.lang.Object getUniqueKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>>

unique_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#unique_key CosmosdbSqlContainer#unique_key}

---

### CosmosdbSqlContainerConflictResolutionPolicy <a name="CosmosdbSqlContainerConflictResolutionPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerConflictResolutionPolicy;

CosmosdbSqlContainerConflictResolutionPolicy.builder()
    .mode(java.lang.String)
//  .conflictResolutionPath(java.lang.String)
//  .conflictResolutionProcedure(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.mode">mode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#mode CosmosdbSqlContainer#mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionPath">conflictResolutionPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionProcedure">conflictResolutionProcedure</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#mode CosmosdbSqlContainer#mode}.

---

##### `conflictResolutionPath`<sup>Optional</sup> <a name="conflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionPath"></a>

```java
public java.lang.String getConflictResolutionPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_path CosmosdbSqlContainer#conflict_resolution_path}.

---

##### `conflictResolutionProcedure`<sup>Optional</sup> <a name="conflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy.property.conflictResolutionProcedure"></a>

```java
public java.lang.String getConflictResolutionProcedure();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#conflict_resolution_procedure CosmosdbSqlContainer#conflict_resolution_procedure}.

---

### CosmosdbSqlContainerIndexingPolicy <a name="CosmosdbSqlContainerIndexingPolicy" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicy;

CosmosdbSqlContainerIndexingPolicy.builder()
//  .compositeIndex(IResolvable)
//  .compositeIndex(java.util.List<CosmosdbSqlContainerIndexingPolicyCompositeIndex>)
//  .excludedPath(IResolvable)
//  .excludedPath(java.util.List<CosmosdbSqlContainerIndexingPolicyExcludedPath>)
//  .includedPath(IResolvable)
//  .includedPath(java.util.List<CosmosdbSqlContainerIndexingPolicyIncludedPath>)
//  .indexingMode(java.lang.String)
//  .spatialIndex(IResolvable)
//  .spatialIndex(java.util.List<CosmosdbSqlContainerIndexingPolicySpatialIndex>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.compositeIndex">compositeIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>></code> | composite_index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.excludedPath">excludedPath</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>></code> | excluded_path block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.includedPath">includedPath</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>></code> | included_path block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.indexingMode">indexingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#indexing_mode CosmosdbSqlContainer#indexing_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.spatialIndex">spatialIndex</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>></code> | spatial_index block. |

---

##### `compositeIndex`<sup>Optional</sup> <a name="compositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.compositeIndex"></a>

```java
public java.lang.Object getCompositeIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>>

composite_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#composite_index CosmosdbSqlContainer#composite_index}

---

##### `excludedPath`<sup>Optional</sup> <a name="excludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.excludedPath"></a>

```java
public java.lang.Object getExcludedPath();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>>

excluded_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#excluded_path CosmosdbSqlContainer#excluded_path}

---

##### `includedPath`<sup>Optional</sup> <a name="includedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.includedPath"></a>

```java
public java.lang.Object getIncludedPath();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>>

included_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#included_path CosmosdbSqlContainer#included_path}

---

##### `indexingMode`<sup>Optional</sup> <a name="indexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.indexingMode"></a>

```java
public java.lang.String getIndexingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#indexing_mode CosmosdbSqlContainer#indexing_mode}.

---

##### `spatialIndex`<sup>Optional</sup> <a name="spatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy.property.spatialIndex"></a>

```java
public java.lang.Object getSpatialIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>>

spatial_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#spatial_index CosmosdbSqlContainer#spatial_index}

---

### CosmosdbSqlContainerIndexingPolicyCompositeIndex <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndex;

CosmosdbSqlContainerIndexingPolicyCompositeIndex.builder()
    .index(IResolvable)
    .index(java.util.List<CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.property.index">index</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>></code> | index block. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex.property.index"></a>

```java
public java.lang.Object getIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>>

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#index CosmosdbSqlContainer#index}

---

### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex;

CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.builder()
    .order(java.lang.String)
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.order">order</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#order CosmosdbSqlContainer#order}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#order CosmosdbSqlContainer#order}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicyExcludedPath <a name="CosmosdbSqlContainerIndexingPolicyExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyExcludedPath;

CosmosdbSqlContainerIndexingPolicyExcludedPath.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicyIncludedPath <a name="CosmosdbSqlContainerIndexingPolicyIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyIncludedPath;

CosmosdbSqlContainerIndexingPolicyIncludedPath.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerIndexingPolicySpatialIndex <a name="CosmosdbSqlContainerIndexingPolicySpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicySpatialIndex;

CosmosdbSqlContainerIndexingPolicySpatialIndex.builder()
    .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#path CosmosdbSqlContainer#path}.

---

### CosmosdbSqlContainerTimeouts <a name="CosmosdbSqlContainerTimeouts" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerTimeouts;

CosmosdbSqlContainerTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#create CosmosdbSqlContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#delete CosmosdbSqlContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#read CosmosdbSqlContainer#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#update CosmosdbSqlContainer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#create CosmosdbSqlContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#delete CosmosdbSqlContainer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#read CosmosdbSqlContainer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#update CosmosdbSqlContainer#update}.

---

### CosmosdbSqlContainerUniqueKey <a name="CosmosdbSqlContainerUniqueKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerUniqueKey;

CosmosdbSqlContainerUniqueKey.builder()
    .paths(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#paths CosmosdbSqlContainer#paths}. |

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.8.0/docs/resources/cosmosdb_sql_container#paths CosmosdbSqlContainer#paths}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbSqlContainerAutoscaleSettingsOutputReference <a name="CosmosdbSqlContainerAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerAutoscaleSettingsOutputReference;

new CosmosdbSqlContainerAutoscaleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```java
public void resetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughputInput">maxThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```java
public java.lang.Number getMaxThroughputInput();
```

- *Type:* java.lang.Number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettingsOutputReference.property.internalValue"></a>

```java
public CosmosdbSqlContainerAutoscaleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerAutoscaleSettings">CosmosdbSqlContainerAutoscaleSettings</a>

---


### CosmosdbSqlContainerConflictResolutionPolicyOutputReference <a name="CosmosdbSqlContainerConflictResolutionPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerConflictResolutionPolicyOutputReference;

new CosmosdbSqlContainerConflictResolutionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionPath">resetConflictResolutionPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure">resetConflictResolutionProcedure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConflictResolutionPath` <a name="resetConflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionPath"></a>

```java
public void resetConflictResolutionPath()
```

##### `resetConflictResolutionProcedure` <a name="resetConflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.resetConflictResolutionProcedure"></a>

```java
public void resetConflictResolutionProcedure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput">conflictResolutionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput">conflictResolutionProcedureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPath">conflictResolutionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure">conflictResolutionProcedure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolutionPathInput`<sup>Optional</sup> <a name="conflictResolutionPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPathInput"></a>

```java
public java.lang.String getConflictResolutionPathInput();
```

- *Type:* java.lang.String

---

##### `conflictResolutionProcedureInput`<sup>Optional</sup> <a name="conflictResolutionProcedureInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedureInput"></a>

```java
public java.lang.String getConflictResolutionProcedureInput();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `conflictResolutionPath`<sup>Required</sup> <a name="conflictResolutionPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionPath"></a>

```java
public java.lang.String getConflictResolutionPath();
```

- *Type:* java.lang.String

---

##### `conflictResolutionProcedure`<sup>Required</sup> <a name="conflictResolutionProcedure" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.conflictResolutionProcedure"></a>

```java
public java.lang.String getConflictResolutionProcedure();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicyOutputReference.property.internalValue"></a>

```java
public CosmosdbSqlContainerConflictResolutionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerConflictResolutionPolicy">CosmosdbSqlContainerConflictResolutionPolicy</a>

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get"></a>

```java
public CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>>

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexList <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndexList;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get"></a>

```java
public CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>>

---


### CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference;

new CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex">putIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIndex` <a name="putIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex"></a>

```java
public void putIndex(IResolvable OR java.util.List<CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.putIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.index">index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.indexInput">indexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.index"></a>

```java
public CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList getIndex();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndexList</a>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.indexInput"></a>

```java
public java.lang.Object getIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndexIndex</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>

---


### CosmosdbSqlContainerIndexingPolicyExcludedPathList <a name="CosmosdbSqlContainerIndexingPolicyExcludedPathList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyExcludedPathList;

new CosmosdbSqlContainerIndexingPolicyExcludedPathList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get"></a>

```java
public CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>>

---


### CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference <a name="CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference;

new CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>

---


### CosmosdbSqlContainerIndexingPolicyIncludedPathList <a name="CosmosdbSqlContainerIndexingPolicyIncludedPathList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyIncludedPathList;

new CosmosdbSqlContainerIndexingPolicyIncludedPathList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get"></a>

```java
public CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>>

---


### CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference <a name="CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference;

new CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>

---


### CosmosdbSqlContainerIndexingPolicyOutputReference <a name="CosmosdbSqlContainerIndexingPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicyOutputReference;

new CosmosdbSqlContainerIndexingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex">putCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath">putExcludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath">putIncludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex">putSpatialIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetCompositeIndex">resetCompositeIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetExcludedPath">resetExcludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIncludedPath">resetIncludedPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIndexingMode">resetIndexingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetSpatialIndex">resetSpatialIndex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompositeIndex` <a name="putCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex"></a>

```java
public void putCompositeIndex(IResolvable OR java.util.List<CosmosdbSqlContainerIndexingPolicyCompositeIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putCompositeIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>>

---

##### `putExcludedPath` <a name="putExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath"></a>

```java
public void putExcludedPath(IResolvable OR java.util.List<CosmosdbSqlContainerIndexingPolicyExcludedPath> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putExcludedPath.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>>

---

##### `putIncludedPath` <a name="putIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath"></a>

```java
public void putIncludedPath(IResolvable OR java.util.List<CosmosdbSqlContainerIndexingPolicyIncludedPath> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putIncludedPath.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>>

---

##### `putSpatialIndex` <a name="putSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex"></a>

```java
public void putSpatialIndex(IResolvable OR java.util.List<CosmosdbSqlContainerIndexingPolicySpatialIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.putSpatialIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>>

---

##### `resetCompositeIndex` <a name="resetCompositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetCompositeIndex"></a>

```java
public void resetCompositeIndex()
```

##### `resetExcludedPath` <a name="resetExcludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetExcludedPath"></a>

```java
public void resetExcludedPath()
```

##### `resetIncludedPath` <a name="resetIncludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIncludedPath"></a>

```java
public void resetIncludedPath()
```

##### `resetIndexingMode` <a name="resetIndexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetIndexingMode"></a>

```java
public void resetIndexingMode()
```

##### `resetSpatialIndex` <a name="resetSpatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.resetSpatialIndex"></a>

```java
public void resetSpatialIndex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndex">compositeIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPath">excludedPath</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList">CosmosdbSqlContainerIndexingPolicyExcludedPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPath">includedPath</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList">CosmosdbSqlContainerIndexingPolicyIncludedPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndex">spatialIndex</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList">CosmosdbSqlContainerIndexingPolicySpatialIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndexInput">compositeIndexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPathInput">excludedPathInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPathInput">includedPathInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingModeInput">indexingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndexInput">spatialIndexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingMode">indexingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compositeIndex`<sup>Required</sup> <a name="compositeIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndex"></a>

```java
public CosmosdbSqlContainerIndexingPolicyCompositeIndexList getCompositeIndex();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndexList">CosmosdbSqlContainerIndexingPolicyCompositeIndexList</a>

---

##### `excludedPath`<sup>Required</sup> <a name="excludedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPath"></a>

```java
public CosmosdbSqlContainerIndexingPolicyExcludedPathList getExcludedPath();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPathList">CosmosdbSqlContainerIndexingPolicyExcludedPathList</a>

---

##### `includedPath`<sup>Required</sup> <a name="includedPath" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPath"></a>

```java
public CosmosdbSqlContainerIndexingPolicyIncludedPathList getIncludedPath();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPathList">CosmosdbSqlContainerIndexingPolicyIncludedPathList</a>

---

##### `spatialIndex`<sup>Required</sup> <a name="spatialIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndex"></a>

```java
public CosmosdbSqlContainerIndexingPolicySpatialIndexList getSpatialIndex();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList">CosmosdbSqlContainerIndexingPolicySpatialIndexList</a>

---

##### `compositeIndexInput`<sup>Optional</sup> <a name="compositeIndexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.compositeIndexInput"></a>

```java
public java.lang.Object getCompositeIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyCompositeIndex">CosmosdbSqlContainerIndexingPolicyCompositeIndex</a>>

---

##### `excludedPathInput`<sup>Optional</sup> <a name="excludedPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.excludedPathInput"></a>

```java
public java.lang.Object getExcludedPathInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyExcludedPath">CosmosdbSqlContainerIndexingPolicyExcludedPath</a>>

---

##### `includedPathInput`<sup>Optional</sup> <a name="includedPathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.includedPathInput"></a>

```java
public java.lang.Object getIncludedPathInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyIncludedPath">CosmosdbSqlContainerIndexingPolicyIncludedPath</a>>

---

##### `indexingModeInput`<sup>Optional</sup> <a name="indexingModeInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingModeInput"></a>

```java
public java.lang.String getIndexingModeInput();
```

- *Type:* java.lang.String

---

##### `spatialIndexInput`<sup>Optional</sup> <a name="spatialIndexInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.spatialIndexInput"></a>

```java
public java.lang.Object getSpatialIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>>

---

##### `indexingMode`<sup>Required</sup> <a name="indexingMode" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.indexingMode"></a>

```java
public java.lang.String getIndexingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicyOutputReference.property.internalValue"></a>

```java
public CosmosdbSqlContainerIndexingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicy">CosmosdbSqlContainerIndexingPolicy</a>

---


### CosmosdbSqlContainerIndexingPolicySpatialIndexList <a name="CosmosdbSqlContainerIndexingPolicySpatialIndexList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicySpatialIndexList;

new CosmosdbSqlContainerIndexingPolicySpatialIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get"></a>

```java
public CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>>

---


### CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference <a name="CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference;

new CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerIndexingPolicySpatialIndex">CosmosdbSqlContainerIndexingPolicySpatialIndex</a>

---


### CosmosdbSqlContainerTimeoutsOutputReference <a name="CosmosdbSqlContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerTimeoutsOutputReference;

new CosmosdbSqlContainerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerTimeouts">CosmosdbSqlContainerTimeouts</a>

---


### CosmosdbSqlContainerUniqueKeyList <a name="CosmosdbSqlContainerUniqueKeyList" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerUniqueKeyList;

new CosmosdbSqlContainerUniqueKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get"></a>

```java
public CosmosdbSqlContainerUniqueKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>>

---


### CosmosdbSqlContainerUniqueKeyOutputReference <a name="CosmosdbSqlContainerUniqueKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_sql_container.CosmosdbSqlContainerUniqueKeyOutputReference;

new CosmosdbSqlContainerUniqueKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.pathsInput">pathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.paths">paths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathsInput`<sup>Optional</sup> <a name="pathsInput" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.pathsInput"></a>

```java
public java.util.List<java.lang.String> getPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `paths`<sup>Required</sup> <a name="paths" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.paths"></a>

```java
public java.util.List<java.lang.String> getPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbSqlContainer.CosmosdbSqlContainerUniqueKey">CosmosdbSqlContainerUniqueKey</a>

---



