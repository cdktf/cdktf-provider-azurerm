# `azurerm_cosmosdb_cassandra_datacenter`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_cassandra_datacenter`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter).

# `cosmosdbCassandraDatacenter` Submodule <a name="`cosmosdbCassandraDatacenter` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraDatacenter <a name="CosmosdbCassandraDatacenter" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter azurerm_cosmosdb_cassandra_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cassandra_cluster_id: str,
  delegated_management_subnet_id: str,
  location: str,
  name: str,
  availability_zones_enabled: typing.Union[bool, IResolvable] = None,
  backup_storage_customer_key_uri: str = None,
  base64_encoded_yaml_fragment: str = None,
  disk_count: typing.Union[int, float] = None,
  disk_sku: str = None,
  id: str = None,
  managed_disk_customer_key_uri: str = None,
  node_count: typing.Union[int, float] = None,
  sku_name: str = None,
  timeouts: CosmosdbCassandraDatacenterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.cassandraClusterId">cassandra_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.delegatedManagementSubnetId">delegated_management_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.availabilityZonesEnabled">availability_zones_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.backupStorageCustomerKeyUri">backup_storage_customer_key_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.base64EncodedYamlFragment">base64_encoded_yaml_fragment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskCount">disk_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskSku">disk_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.managedDiskCustomerKeyUri">managed_disk_customer_key_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cassandra_cluster_id`<sup>Required</sup> <a name="cassandra_cluster_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.cassandraClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `delegated_management_subnet_id`<sup>Required</sup> <a name="delegated_management_subnet_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.delegatedManagementSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `availability_zones_enabled`<sup>Optional</sup> <a name="availability_zones_enabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.availabilityZonesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `backup_storage_customer_key_uri`<sup>Optional</sup> <a name="backup_storage_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.backupStorageCustomerKeyUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `base64_encoded_yaml_fragment`<sup>Optional</sup> <a name="base64_encoded_yaml_fragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.base64EncodedYamlFragment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `disk_count`<sup>Optional</sup> <a name="disk_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `disk_sku`<sup>Optional</sup> <a name="disk_sku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.diskSku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_disk_customer_key_uri`<sup>Optional</sup> <a name="managed_disk_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.managedDiskCustomerKeyUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `sku_name`<sup>Optional</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled">reset_availability_zones_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri">reset_backup_storage_customer_key_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment">reset_base64_encoded_yaml_fragment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount">reset_disk_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku">reset_disk_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri">reset_managed_disk_customer_key_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName">reset_sku_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}.

---

##### `reset_availability_zones_enabled` <a name="reset_availability_zones_enabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetAvailabilityZonesEnabled"></a>

```python
def reset_availability_zones_enabled() -> None
```

##### `reset_backup_storage_customer_key_uri` <a name="reset_backup_storage_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBackupStorageCustomerKeyUri"></a>

```python
def reset_backup_storage_customer_key_uri() -> None
```

##### `reset_base64_encoded_yaml_fragment` <a name="reset_base64_encoded_yaml_fragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetBase64EncodedYamlFragment"></a>

```python
def reset_base64_encoded_yaml_fragment() -> None
```

##### `reset_disk_count` <a name="reset_disk_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskCount"></a>

```python
def reset_disk_count() -> None
```

##### `reset_disk_sku` <a name="reset_disk_sku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetDiskSku"></a>

```python
def reset_disk_sku() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_disk_customer_key_uri` <a name="reset_managed_disk_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetManagedDiskCustomerKeyUri"></a>

```python
def reset_managed_disk_customer_key_uri() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_sku_name` <a name="reset_sku_name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetSkuName"></a>

```python
def reset_sku_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput">availability_zones_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput">backup_storage_customer_key_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput">base64_encoded_yaml_fragment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput">cassandra_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput">delegated_management_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput">disk_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput">disk_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput">managed_disk_customer_key_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled">availability_zones_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri">backup_storage_customer_key_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment">base64_encoded_yaml_fragment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId">cassandra_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId">delegated_management_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount">disk_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku">disk_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri">managed_disk_customer_key_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeouts"></a>

```python
timeouts: CosmosdbCassandraDatacenterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference">CosmosdbCassandraDatacenterTimeoutsOutputReference</a>

---

##### `availability_zones_enabled_input`<sup>Optional</sup> <a name="availability_zones_enabled_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabledInput"></a>

```python
availability_zones_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_storage_customer_key_uri_input`<sup>Optional</sup> <a name="backup_storage_customer_key_uri_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUriInput"></a>

```python
backup_storage_customer_key_uri_input: str
```

- *Type:* str

---

##### `base64_encoded_yaml_fragment_input`<sup>Optional</sup> <a name="base64_encoded_yaml_fragment_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragmentInput"></a>

```python
base64_encoded_yaml_fragment_input: str
```

- *Type:* str

---

##### `cassandra_cluster_id_input`<sup>Optional</sup> <a name="cassandra_cluster_id_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterIdInput"></a>

```python
cassandra_cluster_id_input: str
```

- *Type:* str

---

##### `delegated_management_subnet_id_input`<sup>Optional</sup> <a name="delegated_management_subnet_id_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetIdInput"></a>

```python
delegated_management_subnet_id_input: str
```

- *Type:* str

---

##### `disk_count_input`<sup>Optional</sup> <a name="disk_count_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCountInput"></a>

```python
disk_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_sku_input`<sup>Optional</sup> <a name="disk_sku_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSkuInput"></a>

```python
disk_sku_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_disk_customer_key_uri_input`<sup>Optional</sup> <a name="managed_disk_customer_key_uri_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUriInput"></a>

```python
managed_disk_customer_key_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CosmosdbCassandraDatacenterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>, cdktf.IResolvable]

---

##### `availability_zones_enabled`<sup>Required</sup> <a name="availability_zones_enabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.availabilityZonesEnabled"></a>

```python
availability_zones_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_storage_customer_key_uri`<sup>Required</sup> <a name="backup_storage_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.backupStorageCustomerKeyUri"></a>

```python
backup_storage_customer_key_uri: str
```

- *Type:* str

---

##### `base64_encoded_yaml_fragment`<sup>Required</sup> <a name="base64_encoded_yaml_fragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.base64EncodedYamlFragment"></a>

```python
base64_encoded_yaml_fragment: str
```

- *Type:* str

---

##### `cassandra_cluster_id`<sup>Required</sup> <a name="cassandra_cluster_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.cassandraClusterId"></a>

```python
cassandra_cluster_id: str
```

- *Type:* str

---

##### `delegated_management_subnet_id`<sup>Required</sup> <a name="delegated_management_subnet_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.delegatedManagementSubnetId"></a>

```python
delegated_management_subnet_id: str
```

- *Type:* str

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskCount"></a>

```python
disk_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disk_sku`<sup>Required</sup> <a name="disk_sku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.diskSku"></a>

```python
disk_sku: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `managed_disk_customer_key_uri`<sup>Required</sup> <a name="managed_disk_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.managedDiskCustomerKeyUri"></a>

```python
managed_disk_customer_key_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraDatacenterConfig <a name="CosmosdbCassandraDatacenterConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cassandra_cluster_id: str,
  delegated_management_subnet_id: str,
  location: str,
  name: str,
  availability_zones_enabled: typing.Union[bool, IResolvable] = None,
  backup_storage_customer_key_uri: str = None,
  base64_encoded_yaml_fragment: str = None,
  disk_count: typing.Union[int, float] = None,
  disk_sku: str = None,
  id: str = None,
  managed_disk_customer_key_uri: str = None,
  node_count: typing.Union[int, float] = None,
  sku_name: str = None,
  timeouts: CosmosdbCassandraDatacenterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId">cassandra_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId">delegated_management_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled">availability_zones_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri">backup_storage_customer_key_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment">base64_encoded_yaml_fragment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount">disk_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku">disk_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri">managed_disk_customer_key_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cassandra_cluster_id`<sup>Required</sup> <a name="cassandra_cluster_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.cassandraClusterId"></a>

```python
cassandra_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#cassandra_cluster_id CosmosdbCassandraDatacenter#cassandra_cluster_id}.

---

##### `delegated_management_subnet_id`<sup>Required</sup> <a name="delegated_management_subnet_id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.delegatedManagementSubnetId"></a>

```python
delegated_management_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delegated_management_subnet_id CosmosdbCassandraDatacenter#delegated_management_subnet_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#location CosmosdbCassandraDatacenter#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#name CosmosdbCassandraDatacenter#name}.

---

##### `availability_zones_enabled`<sup>Optional</sup> <a name="availability_zones_enabled" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.availabilityZonesEnabled"></a>

```python
availability_zones_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#availability_zones_enabled CosmosdbCassandraDatacenter#availability_zones_enabled}.

---

##### `backup_storage_customer_key_uri`<sup>Optional</sup> <a name="backup_storage_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.backupStorageCustomerKeyUri"></a>

```python
backup_storage_customer_key_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#backup_storage_customer_key_uri CosmosdbCassandraDatacenter#backup_storage_customer_key_uri}.

---

##### `base64_encoded_yaml_fragment`<sup>Optional</sup> <a name="base64_encoded_yaml_fragment" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.base64EncodedYamlFragment"></a>

```python
base64_encoded_yaml_fragment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#base64_encoded_yaml_fragment CosmosdbCassandraDatacenter#base64_encoded_yaml_fragment}.

---

##### `disk_count`<sup>Optional</sup> <a name="disk_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskCount"></a>

```python
disk_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_count CosmosdbCassandraDatacenter#disk_count}.

---

##### `disk_sku`<sup>Optional</sup> <a name="disk_sku" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.diskSku"></a>

```python
disk_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#disk_sku CosmosdbCassandraDatacenter#disk_sku}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#id CosmosdbCassandraDatacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_disk_customer_key_uri`<sup>Optional</sup> <a name="managed_disk_customer_key_uri" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.managedDiskCustomerKeyUri"></a>

```python
managed_disk_customer_key_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#managed_disk_customer_key_uri CosmosdbCassandraDatacenter#managed_disk_customer_key_uri}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#node_count CosmosdbCassandraDatacenter#node_count}.

---

##### `sku_name`<sup>Optional</sup> <a name="sku_name" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#sku_name CosmosdbCassandraDatacenter#sku_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterConfig.property.timeouts"></a>

```python
timeouts: CosmosdbCassandraDatacenterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#timeouts CosmosdbCassandraDatacenter#timeouts}

---

### CosmosdbCassandraDatacenterTimeouts <a name="CosmosdbCassandraDatacenterTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#create CosmosdbCassandraDatacenter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#delete CosmosdbCassandraDatacenter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#read CosmosdbCassandraDatacenter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/cosmosdb_cassandra_datacenter#update CosmosdbCassandraDatacenter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraDatacenterTimeoutsOutputReference <a name="CosmosdbCassandraDatacenterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_cassandra_datacenter

cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CosmosdbCassandraDatacenterTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.cosmosdbCassandraDatacenter.CosmosdbCassandraDatacenterTimeouts">CosmosdbCassandraDatacenterTimeouts</a>, cdktf.IResolvable]

---



