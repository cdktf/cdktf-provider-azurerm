# `cosmosdbMongoCollection` Submodule <a name="`cosmosdbMongoCollection` Submodule" id="@cdktf/provider-azurerm.cosmosdbMongoCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoCollection <a name="CosmosdbMongoCollection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection azurerm_cosmosdb_mongo_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollection;

CosmosdbMongoCollection.Builder.create(Construct scope, java.lang.String id)
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
    .resourceGroupName(java.lang.String)
//  .analyticalStorageTtl(java.lang.Number)
//  .autoscaleSettings(CosmosdbMongoCollectionAutoscaleSettings)
//  .defaultTtlSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .index(IResolvable)
//  .index(java.util.List<CosmosdbMongoCollectionIndex>)
//  .shardKey(java.lang.String)
//  .throughput(java.lang.Number)
//  .timeouts(CosmosdbMongoCollectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.defaultTtlSeconds">defaultTtlSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.index">index</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>></code> | index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.shardKey">shardKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.accountName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.databaseName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.analyticalStorageTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.autoscaleSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#autoscale_settings CosmosdbMongoCollection#autoscale_settings}

---

##### `defaultTtlSeconds`<sup>Optional</sup> <a name="defaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.defaultTtlSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.index"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>>

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#index CosmosdbMongoCollection#index}

---

##### `shardKey`<sup>Optional</sup> <a name="shardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.shardKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.throughput"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#timeouts CosmosdbMongoCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings">putAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex">putIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl">resetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings">resetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds">resetDefaultTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey">resetShardKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput">resetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoscaleSettings` <a name="putAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings"></a>

```java
public void putAutoscaleSettings(CosmosdbMongoCollectionAutoscaleSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---

##### `putIndex` <a name="putIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex"></a>

```java
public void putIndex(IResolvable OR java.util.List<CosmosdbMongoCollectionIndex> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts"></a>

```java
public void putTimeouts(CosmosdbMongoCollectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

---

##### `resetAnalyticalStorageTtl` <a name="resetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl"></a>

```java
public void resetAnalyticalStorageTtl()
```

##### `resetAutoscaleSettings` <a name="resetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings"></a>

```java
public void resetAutoscaleSettings()
```

##### `resetDefaultTtlSeconds` <a name="resetDefaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds"></a>

```java
public void resetDefaultTtlSeconds()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId"></a>

```java
public void resetId()
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex"></a>

```java
public void resetIndex()
```

##### `resetShardKey` <a name="resetShardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey"></a>

```java
public void resetShardKey()
```

##### `resetThroughput` <a name="resetThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput"></a>

```java
public void resetThroughput()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbMongoCollection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollection;

CosmosdbMongoCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollection;

CosmosdbMongoCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollection;

CosmosdbMongoCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollection;

CosmosdbMongoCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CosmosdbMongoCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CosmosdbMongoCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CosmosdbMongoCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CosmosdbMongoCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbMongoCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index">index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes">systemIndexes</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput">accountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput">analyticalStorageTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput">autoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput">defaultTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput">indexInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput">shardKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput">throughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds">defaultTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey">shardKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaleSettings`<sup>Required</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings"></a>

```java
public CosmosdbMongoCollectionAutoscaleSettingsOutputReference getAutoscaleSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index"></a>

```java
public CosmosdbMongoCollectionIndexList getIndex();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a>

---

##### `systemIndexes`<sup>Required</sup> <a name="systemIndexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes"></a>

```java
public CosmosdbMongoCollectionSystemIndexesList getSystemIndexes();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts"></a>

```java
public CosmosdbMongoCollectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a>

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput"></a>

```java
public java.lang.String getAccountNameInput();
```

- *Type:* java.lang.String

---

##### `analyticalStorageTtlInput`<sup>Optional</sup> <a name="analyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput"></a>

```java
public java.lang.Number getAnalyticalStorageTtlInput();
```

- *Type:* java.lang.Number

---

##### `autoscaleSettingsInput`<sup>Optional</sup> <a name="autoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput"></a>

```java
public CosmosdbMongoCollectionAutoscaleSettings getAutoscaleSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `defaultTtlSecondsInput`<sup>Optional</sup> <a name="defaultTtlSecondsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput"></a>

```java
public java.lang.Object getIndexInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `shardKeyInput`<sup>Optional</sup> <a name="shardKeyInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput"></a>

```java
public java.lang.String getShardKeyInput();
```

- *Type:* java.lang.String

---

##### `throughputInput`<sup>Optional</sup> <a name="throughputInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput"></a>

```java
public java.lang.Number getThroughputInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `analyticalStorageTtl`<sup>Required</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl"></a>

```java
public java.lang.Number getAnalyticalStorageTtl();
```

- *Type:* java.lang.Number

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `defaultTtlSeconds`<sup>Required</sup> <a name="defaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds"></a>

```java
public java.lang.Number getDefaultTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `shardKey`<sup>Required</sup> <a name="shardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey"></a>

```java
public java.lang.String getShardKey();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoCollectionAutoscaleSettings <a name="CosmosdbMongoCollectionAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionAutoscaleSettings;

CosmosdbMongoCollectionAutoscaleSettings.builder()
//  .maxThroughput(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}. |

---

##### `maxThroughput`<sup>Optional</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}.

---

### CosmosdbMongoCollectionConfig <a name="CosmosdbMongoCollectionConfig" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionConfig;

CosmosdbMongoCollectionConfig.builder()
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
    .resourceGroupName(java.lang.String)
//  .analyticalStorageTtl(java.lang.Number)
//  .autoscaleSettings(CosmosdbMongoCollectionAutoscaleSettings)
//  .defaultTtlSeconds(java.lang.Number)
//  .id(java.lang.String)
//  .index(IResolvable)
//  .index(java.util.List<CosmosdbMongoCollectionIndex>)
//  .shardKey(java.lang.String)
//  .throughput(java.lang.Number)
//  .timeouts(CosmosdbMongoCollectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName">accountName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl">analyticalStorageTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings">autoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds">defaultTtlSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index">index</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>></code> | index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey">shardKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}.

---

##### `analyticalStorageTtl`<sup>Optional</sup> <a name="analyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl"></a>

```java
public java.lang.Number getAnalyticalStorageTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}.

---

##### `autoscaleSettings`<sup>Optional</sup> <a name="autoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings"></a>

```java
public CosmosdbMongoCollectionAutoscaleSettings getAutoscaleSettings();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#autoscale_settings CosmosdbMongoCollection#autoscale_settings}

---

##### `defaultTtlSeconds`<sup>Optional</sup> <a name="defaultTtlSeconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds"></a>

```java
public java.lang.Number getDefaultTtlSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index"></a>

```java
public java.lang.Object getIndex();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>>

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#index CosmosdbMongoCollection#index}

---

##### `shardKey`<sup>Optional</sup> <a name="shardKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey"></a>

```java
public java.lang.String getShardKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts"></a>

```java
public CosmosdbMongoCollectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#timeouts CosmosdbMongoCollection#timeouts}

---

### CosmosdbMongoCollectionIndex <a name="CosmosdbMongoCollectionIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionIndex;

CosmosdbMongoCollectionIndex.builder()
    .keys(java.util.List<java.lang.String>)
//  .unique(java.lang.Boolean)
//  .unique(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique">unique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}. |

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique"></a>

```java
public java.lang.Object getUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}.

---

### CosmosdbMongoCollectionSystemIndexes <a name="CosmosdbMongoCollectionSystemIndexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionSystemIndexes;

CosmosdbMongoCollectionSystemIndexes.builder()
    .build();
```


### CosmosdbMongoCollectionTimeouts <a name="CosmosdbMongoCollectionTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionTimeouts;

CosmosdbMongoCollectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoCollectionAutoscaleSettingsOutputReference <a name="CosmosdbMongoCollectionAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference;

new CosmosdbMongoCollectionAutoscaleSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput">resetMaxThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxThroughput` <a name="resetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```java
public void resetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput">maxThroughputInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput">maxThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxThroughputInput`<sup>Optional</sup> <a name="maxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```java
public java.lang.Number getMaxThroughputInput();
```

- *Type:* java.lang.Number

---

##### `maxThroughput`<sup>Required</sup> <a name="maxThroughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```java
public java.lang.Number getMaxThroughput();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue"></a>

```java
public CosmosdbMongoCollectionAutoscaleSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---


### CosmosdbMongoCollectionIndexList <a name="CosmosdbMongoCollectionIndexList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionIndexList;

new CosmosdbMongoCollectionIndexList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get"></a>

```java
public CosmosdbMongoCollectionIndexOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>>

---


### CosmosdbMongoCollectionIndexOutputReference <a name="CosmosdbMongoCollectionIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionIndexOutputReference;

new CosmosdbMongoCollectionIndexOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique">resetUnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnique` <a name="resetUnique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique"></a>

```java
public void resetUnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput">keysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput">uniqueInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique">unique</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput"></a>

```java
public java.util.List<java.lang.String> getKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uniqueInput`<sup>Optional</sup> <a name="uniqueInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput"></a>

```java
public java.lang.Object getUniqueInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique"></a>

```java
public java.lang.Object getUnique();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>

---


### CosmosdbMongoCollectionSystemIndexesList <a name="CosmosdbMongoCollectionSystemIndexesList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionSystemIndexesList;

new CosmosdbMongoCollectionSystemIndexesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get"></a>

```java
public CosmosdbMongoCollectionSystemIndexesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CosmosdbMongoCollectionSystemIndexesOutputReference <a name="CosmosdbMongoCollectionSystemIndexesOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionSystemIndexesOutputReference;

new CosmosdbMongoCollectionSystemIndexesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys">keys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique">unique</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys"></a>

```java
public java.util.List<java.lang.String> getKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique"></a>

```java
public IResolvable getUnique();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue"></a>

```java
public CosmosdbMongoCollectionSystemIndexes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a>

---


### CosmosdbMongoCollectionTimeoutsOutputReference <a name="CosmosdbMongoCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_mongo_collection.CosmosdbMongoCollectionTimeoutsOutputReference;

new CosmosdbMongoCollectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

---



