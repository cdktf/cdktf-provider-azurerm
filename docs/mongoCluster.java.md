# `mongoCluster` Submodule <a name="`mongoCluster` Submodule" id="@cdktf/provider-azurerm.mongoCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongoCluster <a name="MongoCluster" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster azurerm_mongo_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoCluster;

MongoCluster.Builder.create(Construct scope, java.lang.String id)
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
//  .administratorPassword(java.lang.String)
//  .administratorUsername(java.lang.String)
//  .computeTier(java.lang.String)
//  .createMode(java.lang.String)
//  .highAvailabilityMode(java.lang.String)
//  .id(java.lang.String)
//  .previewFeatures(java.util.List<java.lang.String>)
//  .publicNetworkAccess(java.lang.String)
//  .shardCount(java.lang.Number)
//  .sourceLocation(java.lang.String)
//  .sourceServerId(java.lang.String)
//  .storageSizeInGb(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MongoClusterTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#location MongoCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#name MongoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.administratorUsername">administratorUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.computeTier">computeTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.highAvailabilityMode">highAvailabilityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.previewFeatures">previewFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.sourceLocation">sourceLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.sourceServerId">sourceServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#tags MongoCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#version MongoCluster#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#location MongoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#name MongoCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.administratorPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}.

---

##### `administratorUsername`<sup>Optional</sup> <a name="administratorUsername" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.administratorUsername"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}.

---

##### `computeTier`<sup>Optional</sup> <a name="computeTier" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.computeTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.createMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}.

---

##### `highAvailabilityMode`<sup>Optional</sup> <a name="highAvailabilityMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.highAvailabilityMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `previewFeatures`<sup>Optional</sup> <a name="previewFeatures" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.previewFeatures"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.publicNetworkAccess"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}.

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.sourceLocation"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}.

---

##### `sourceServerId`<sup>Optional</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.sourceServerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}.

---

##### `storageSizeInGb`<sup>Optional</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.storageSizeInGb"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#tags MongoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.Initializer.parameter.version"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#version MongoCluster#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorPassword">resetAdministratorPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorUsername">resetAdministratorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetComputeTier">resetComputeTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetCreateMode">resetCreateMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetHighAvailabilityMode">resetHighAvailabilityMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetPreviewFeatures">resetPreviewFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetPublicNetworkAccess">resetPublicNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetShardCount">resetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetSourceServerId">resetSourceServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetStorageSizeInGb">resetStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.putTimeouts"></a>

```java
public void putTimeouts(MongoClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `resetAdministratorPassword` <a name="resetAdministratorPassword" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorPassword"></a>

```java
public void resetAdministratorPassword()
```

##### `resetAdministratorUsername` <a name="resetAdministratorUsername" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetAdministratorUsername"></a>

```java
public void resetAdministratorUsername()
```

##### `resetComputeTier` <a name="resetComputeTier" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetComputeTier"></a>

```java
public void resetComputeTier()
```

##### `resetCreateMode` <a name="resetCreateMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetCreateMode"></a>

```java
public void resetCreateMode()
```

##### `resetHighAvailabilityMode` <a name="resetHighAvailabilityMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetHighAvailabilityMode"></a>

```java
public void resetHighAvailabilityMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetId"></a>

```java
public void resetId()
```

##### `resetPreviewFeatures` <a name="resetPreviewFeatures" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetPreviewFeatures"></a>

```java
public void resetPreviewFeatures()
```

##### `resetPublicNetworkAccess` <a name="resetPublicNetworkAccess" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetPublicNetworkAccess"></a>

```java
public void resetPublicNetworkAccess()
```

##### `resetShardCount` <a name="resetShardCount" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetShardCount"></a>

```java
public void resetShardCount()
```

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetSourceLocation"></a>

```java
public void resetSourceLocation()
```

##### `resetSourceServerId` <a name="resetSourceServerId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetSourceServerId"></a>

```java
public void resetSourceServerId()
```

##### `resetStorageSizeInGb` <a name="resetStorageSizeInGb" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetStorageSizeInGb"></a>

```java
public void resetStorageSizeInGb()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoCluster;

MongoCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoCluster;

MongoCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoCluster;

MongoCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoCluster;

MongoCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MongoCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MongoCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MongoCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MongoCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MongoCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorPasswordInput">administratorPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsernameInput">administratorUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.computeTierInput">computeTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.createModeInput">createModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityModeInput">highAvailabilityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.previewFeaturesInput">previewFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccessInput">publicNetworkAccessInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocationInput">sourceLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerIdInput">sourceServerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGbInput">storageSizeInGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsername">administratorUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.computeTier">computeTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.createMode">createMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.previewFeatures">previewFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocation">sourceLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerId">sourceServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.timeouts"></a>

```java
public MongoClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference">MongoClusterTimeoutsOutputReference</a>

---

##### `administratorPasswordInput`<sup>Optional</sup> <a name="administratorPasswordInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorPasswordInput"></a>

```java
public java.lang.String getAdministratorPasswordInput();
```

- *Type:* java.lang.String

---

##### `administratorUsernameInput`<sup>Optional</sup> <a name="administratorUsernameInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsernameInput"></a>

```java
public java.lang.String getAdministratorUsernameInput();
```

- *Type:* java.lang.String

---

##### `computeTierInput`<sup>Optional</sup> <a name="computeTierInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.computeTierInput"></a>

```java
public java.lang.String getComputeTierInput();
```

- *Type:* java.lang.String

---

##### `createModeInput`<sup>Optional</sup> <a name="createModeInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.createModeInput"></a>

```java
public java.lang.String getCreateModeInput();
```

- *Type:* java.lang.String

---

##### `highAvailabilityModeInput`<sup>Optional</sup> <a name="highAvailabilityModeInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityModeInput"></a>

```java
public java.lang.String getHighAvailabilityModeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `previewFeaturesInput`<sup>Optional</sup> <a name="previewFeaturesInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.previewFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getPreviewFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicNetworkAccessInput`<sup>Optional</sup> <a name="publicNetworkAccessInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccessInput"></a>

```java
public java.lang.String getPublicNetworkAccessInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocationInput"></a>

```java
public java.lang.String getSourceLocationInput();
```

- *Type:* java.lang.String

---

##### `sourceServerIdInput`<sup>Optional</sup> <a name="sourceServerIdInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerIdInput"></a>

```java
public java.lang.String getSourceServerIdInput();
```

- *Type:* java.lang.String

---

##### `storageSizeInGbInput`<sup>Optional</sup> <a name="storageSizeInGbInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGbInput"></a>

```java
public java.lang.Number getStorageSizeInGbInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `administratorPassword`<sup>Required</sup> <a name="administratorPassword" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorPassword"></a>

```java
public java.lang.String getAdministratorPassword();
```

- *Type:* java.lang.String

---

##### `administratorUsername`<sup>Required</sup> <a name="administratorUsername" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.administratorUsername"></a>

```java
public java.lang.String getAdministratorUsername();
```

- *Type:* java.lang.String

---

##### `computeTier`<sup>Required</sup> <a name="computeTier" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.computeTier"></a>

```java
public java.lang.String getComputeTier();
```

- *Type:* java.lang.String

---

##### `createMode`<sup>Required</sup> <a name="createMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

---

##### `highAvailabilityMode`<sup>Required</sup> <a name="highAvailabilityMode" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.highAvailabilityMode"></a>

```java
public java.lang.String getHighAvailabilityMode();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `previewFeatures`<sup>Required</sup> <a name="previewFeatures" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.previewFeatures"></a>

```java
public java.util.List<java.lang.String> getPreviewFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicNetworkAccess`<sup>Required</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceLocation"></a>

```java
public java.lang.String getSourceLocation();
```

- *Type:* java.lang.String

---

##### `sourceServerId`<sup>Required</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.sourceServerId"></a>

```java
public java.lang.String getSourceServerId();
```

- *Type:* java.lang.String

---

##### `storageSizeInGb`<sup>Required</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mongoCluster.MongoCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MongoClusterConfig <a name="MongoClusterConfig" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoClusterConfig;

MongoClusterConfig.builder()
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
//  .administratorPassword(java.lang.String)
//  .administratorUsername(java.lang.String)
//  .computeTier(java.lang.String)
//  .createMode(java.lang.String)
//  .highAvailabilityMode(java.lang.String)
//  .id(java.lang.String)
//  .previewFeatures(java.util.List<java.lang.String>)
//  .publicNetworkAccess(java.lang.String)
//  .shardCount(java.lang.Number)
//  .sourceLocation(java.lang.String)
//  .sourceServerId(java.lang.String)
//  .storageSizeInGb(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MongoClusterTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#location MongoCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#name MongoCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorPassword">administratorPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorUsername">administratorUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.computeTier">computeTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.createMode">createMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.highAvailabilityMode">highAvailabilityMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#id MongoCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.previewFeatures">previewFeatures</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.publicNetworkAccess">publicNetworkAccess</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceLocation">sourceLocation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceServerId">sourceServerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageSizeInGb">storageSizeInGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#tags MongoCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#version MongoCluster#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#location MongoCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#name MongoCluster#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#resource_group_name MongoCluster#resource_group_name}.

---

##### `administratorPassword`<sup>Optional</sup> <a name="administratorPassword" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorPassword"></a>

```java
public java.lang.String getAdministratorPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_password MongoCluster#administrator_password}.

---

##### `administratorUsername`<sup>Optional</sup> <a name="administratorUsername" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.administratorUsername"></a>

```java
public java.lang.String getAdministratorUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#administrator_username MongoCluster#administrator_username}.

---

##### `computeTier`<sup>Optional</sup> <a name="computeTier" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.computeTier"></a>

```java
public java.lang.String getComputeTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#compute_tier MongoCluster#compute_tier}.

---

##### `createMode`<sup>Optional</sup> <a name="createMode" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.createMode"></a>

```java
public java.lang.String getCreateMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create_mode MongoCluster#create_mode}.

---

##### `highAvailabilityMode`<sup>Optional</sup> <a name="highAvailabilityMode" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.highAvailabilityMode"></a>

```java
public java.lang.String getHighAvailabilityMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#high_availability_mode MongoCluster#high_availability_mode}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#id MongoCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `previewFeatures`<sup>Optional</sup> <a name="previewFeatures" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.previewFeatures"></a>

```java
public java.util.List<java.lang.String> getPreviewFeatures();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#preview_features MongoCluster#preview_features}.

---

##### `publicNetworkAccess`<sup>Optional</sup> <a name="publicNetworkAccess" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.publicNetworkAccess"></a>

```java
public java.lang.String getPublicNetworkAccess();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#public_network_access MongoCluster#public_network_access}.

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#shard_count MongoCluster#shard_count}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceLocation"></a>

```java
public java.lang.String getSourceLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_location MongoCluster#source_location}.

---

##### `sourceServerId`<sup>Optional</sup> <a name="sourceServerId" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.sourceServerId"></a>

```java
public java.lang.String getSourceServerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#source_server_id MongoCluster#source_server_id}.

---

##### `storageSizeInGb`<sup>Optional</sup> <a name="storageSizeInGb" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.storageSizeInGb"></a>

```java
public java.lang.Number getStorageSizeInGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#storage_size_in_gb MongoCluster#storage_size_in_gb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#tags MongoCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.timeouts"></a>

```java
public MongoClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#timeouts MongoCluster#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#version MongoCluster#version}.

---

### MongoClusterTimeouts <a name="MongoClusterTimeouts" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoClusterTimeouts;

MongoClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create MongoCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#delete MongoCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#read MongoCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#update MongoCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#create MongoCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#delete MongoCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#read MongoCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/mongo_cluster#update MongoCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MongoClusterTimeoutsOutputReference <a name="MongoClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.mongo_cluster.MongoClusterTimeoutsOutputReference;

new MongoClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.mongoCluster.MongoClusterTimeouts">MongoClusterTimeouts</a>

---



