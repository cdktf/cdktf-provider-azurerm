# `azurerm_cosmosdb_cassandra_datacenter`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_cassandra_datacenter`](https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter).

# `cosmosdbCassandraDatacenter` Submodule <a name="`cosmosdbCassandraDatacenter` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraDatacenter <a name="CosmosdbCassandraDatacenter" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenter;

CosmosdbCassandraDatacenter.Builder.create(Construct scope, java.lang.String id)
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
    .cassandraClusterId(java.lang.String)
    .delegatedManagementSubnetId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .availabilityZonesEnabled(java.lang.Boolean)
//  .availabilityZonesEnabled(IResolvable)
//  .backupStorageCustomerKeyUri(java.lang.String)
//  .base64EncodedYamlFragment(java.lang.String)
//  .diskCount(java.lang.Number)
//  .diskSku(java.lang.String)
//  .id(java.lang.String)
//  .managedDiskCustomerKeyUri(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .skuName(java.lang.String)
//  .timeouts(CosmosdbCassandraDatacenterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.cassandraClusterId">cassandraClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.availabilityZonesEnabled">availabilityZonesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.backupStorageCustomerKeyUri">backupStorageCustomerKeyUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.base64EncodedYamlFragment">base64EncodedYamlFragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskSku">diskSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.managedDiskCustomerKeyUri">managedDiskCustomerKeyUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cassandraClusterId`<sup>Required</sup> <a name="cassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.cassandraClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.delegatedManagementSubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `availabilityZonesEnabled`<sup>Optional</sup> <a name="availabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.availabilityZonesEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `backupStorageCustomerKeyUri`<sup>Optional</sup> <a name="backupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.backupStorageCustomerKeyUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `base64EncodedYamlFragment`<sup>Optional</sup> <a name="base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.base64EncodedYamlFragment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `diskSku`<sup>Optional</sup> <a name="diskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskSku"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDiskCustomerKeyUri`<sup>Optional</sup> <a name="managedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.managedDiskCustomerKeyUri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.nodeCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled">resetAvailabilityZonesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri">resetBackupStorageCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment">resetBase64EncodedYamlFragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount">resetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku">resetDiskSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri">resetManagedDiskCustomerKeyUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName">resetSkuName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts"></a>

```java
public void putTimeouts(CosmosdbCassandraDatacenterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

---

##### `resetAvailabilityZonesEnabled` <a name="resetAvailabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled"></a>

```java
public void resetAvailabilityZonesEnabled()
```

##### `resetBackupStorageCustomerKeyUri` <a name="resetBackupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri"></a>

```java
public void resetBackupStorageCustomerKeyUri()
```

##### `resetBase64EncodedYamlFragment` <a name="resetBase64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment"></a>

```java
public void resetBase64EncodedYamlFragment()
```

##### `resetDiskCount` <a name="resetDiskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount"></a>

```java
public void resetDiskCount()
```

##### `resetDiskSku` <a name="resetDiskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku"></a>

```java
public void resetDiskSku()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId"></a>

```java
public void resetId()
```

##### `resetManagedDiskCustomerKeyUri` <a name="resetManagedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri"></a>

```java
public void resetManagedDiskCustomerKeyUri()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetSkuName` <a name="resetSkuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName"></a>

```java
public void resetSkuName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenter;

CosmosdbCassandraDatacenter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenter;

CosmosdbCassandraDatacenter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenter;

CosmosdbCassandraDatacenter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput">availabilityZonesEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput">backupStorageCustomerKeyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput">base64EncodedYamlFragmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput">cassandraClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput">delegatedManagementSubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput">diskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput">diskSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput">managedDiskCustomerKeyUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled">availabilityZonesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri">backupStorageCustomerKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment">base64EncodedYamlFragment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId">cassandraClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku">diskSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri">managedDiskCustomerKeyUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts"></a>

```java
public CosmosdbCassandraDatacenterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a>

---

##### `availabilityZonesEnabledInput`<sup>Optional</sup> <a name="availabilityZonesEnabledInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput"></a>

```java
public java.lang.Object getAvailabilityZonesEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupStorageCustomerKeyUriInput`<sup>Optional</sup> <a name="backupStorageCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput"></a>

```java
public java.lang.String getBackupStorageCustomerKeyUriInput();
```

- *Type:* java.lang.String

---

##### `base64EncodedYamlFragmentInput`<sup>Optional</sup> <a name="base64EncodedYamlFragmentInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput"></a>

```java
public java.lang.String getBase64EncodedYamlFragmentInput();
```

- *Type:* java.lang.String

---

##### `cassandraClusterIdInput`<sup>Optional</sup> <a name="cassandraClusterIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput"></a>

```java
public java.lang.String getCassandraClusterIdInput();
```

- *Type:* java.lang.String

---

##### `delegatedManagementSubnetIdInput`<sup>Optional</sup> <a name="delegatedManagementSubnetIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput"></a>

```java
public java.lang.String getDelegatedManagementSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `diskCountInput`<sup>Optional</sup> <a name="diskCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput"></a>

```java
public java.lang.Number getDiskCountInput();
```

- *Type:* java.lang.Number

---

##### `diskSkuInput`<sup>Optional</sup> <a name="diskSkuInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput"></a>

```java
public java.lang.String getDiskSkuInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `managedDiskCustomerKeyUriInput`<sup>Optional</sup> <a name="managedDiskCustomerKeyUriInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput"></a>

```java
public java.lang.String getManagedDiskCustomerKeyUriInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZonesEnabled`<sup>Required</sup> <a name="availabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled"></a>

```java
public java.lang.Object getAvailabilityZonesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backupStorageCustomerKeyUri`<sup>Required</sup> <a name="backupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri"></a>

```java
public java.lang.String getBackupStorageCustomerKeyUri();
```

- *Type:* java.lang.String

---

##### `base64EncodedYamlFragment`<sup>Required</sup> <a name="base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment"></a>

```java
public java.lang.String getBase64EncodedYamlFragment();
```

- *Type:* java.lang.String

---

##### `cassandraClusterId`<sup>Required</sup> <a name="cassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId"></a>

```java
public java.lang.String getCassandraClusterId();
```

- *Type:* java.lang.String

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId"></a>

```java
public java.lang.String getDelegatedManagementSubnetId();
```

- *Type:* java.lang.String

---

##### `diskCount`<sup>Required</sup> <a name="diskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

---

##### `diskSku`<sup>Required</sup> <a name="diskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku"></a>

```java
public java.lang.String getDiskSku();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `managedDiskCustomerKeyUri`<sup>Required</sup> <a name="managedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri"></a>

```java
public java.lang.String getManagedDiskCustomerKeyUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraDatacenterConfig <a name="CosmosdbCassandraDatacenterConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenterConfig;

CosmosdbCassandraDatacenterConfig.builder()
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
    .cassandraClusterId(java.lang.String)
    .delegatedManagementSubnetId(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
//  .availabilityZonesEnabled(java.lang.Boolean)
//  .availabilityZonesEnabled(IResolvable)
//  .backupStorageCustomerKeyUri(java.lang.String)
//  .base64EncodedYamlFragment(java.lang.String)
//  .diskCount(java.lang.Number)
//  .diskSku(java.lang.String)
//  .id(java.lang.String)
//  .managedDiskCustomerKeyUri(java.lang.String)
//  .nodeCount(java.lang.Number)
//  .skuName(java.lang.String)
//  .timeouts(CosmosdbCassandraDatacenterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId">cassandraClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId">delegatedManagementSubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled">availabilityZonesEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri">backupStorageCustomerKeyUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment">base64EncodedYamlFragment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount">diskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku">diskSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri">managedDiskCustomerKeyUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cassandraClusterId`<sup>Required</sup> <a name="cassandraClusterId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId"></a>

```java
public java.lang.String getCassandraClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `delegatedManagementSubnetId`<sup>Required</sup> <a name="delegatedManagementSubnetId" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId"></a>

```java
public java.lang.String getDelegatedManagementSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `availabilityZonesEnabled`<sup>Optional</sup> <a name="availabilityZonesEnabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled"></a>

```java
public java.lang.Object getAvailabilityZonesEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `backupStorageCustomerKeyUri`<sup>Optional</sup> <a name="backupStorageCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri"></a>

```java
public java.lang.String getBackupStorageCustomerKeyUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `base64EncodedYamlFragment`<sup>Optional</sup> <a name="base64EncodedYamlFragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment"></a>

```java
public java.lang.String getBase64EncodedYamlFragment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `diskCount`<sup>Optional</sup> <a name="diskCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount"></a>

```java
public java.lang.Number getDiskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `diskSku`<sup>Optional</sup> <a name="diskSku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku"></a>

```java
public java.lang.String getDiskSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedDiskCustomerKeyUri`<sup>Optional</sup> <a name="managedDiskCustomerKeyUri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri"></a>

```java
public java.lang.String getManagedDiskCustomerKeyUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `skuName`<sup>Optional</sup> <a name="skuName" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts"></a>

```java
public CosmosdbCassandraDatacenterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

### CosmosdbCassandraDatacenterTimeouts <a name="CosmosdbCassandraDatacenterTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenterTimeouts;

CosmosdbCassandraDatacenterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.61.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraDatacenterTimeoutsOutputReference <a name="CosmosdbCassandraDatacenterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.cosmosdb_cassandra_datacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference;

new CosmosdbCassandraDatacenterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



