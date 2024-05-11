# `cosmosdbPostgresqlCluster` Submodule <a name="`cosmosdbPostgresqlCluster` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlCluster <a name="CosmosdbPostgresqlCluster" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster azurerm_cosmosdb_postgresql_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  node_count: typing.Union[int, float],
  resource_group_name: str,
  administrator_login_password: str = None,
  citus_version: str = None,
  coordinator_public_ip_access_enabled: typing.Union[bool, IResolvable] = None,
  coordinator_server_edition: str = None,
  coordinator_storage_quota_in_mb: typing.Union[int, float] = None,
  coordinator_vcore_count: typing.Union[int, float] = None,
  ha_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window: CosmosdbPostgresqlClusterMaintenanceWindow = None,
  node_public_ip_access_enabled: typing.Union[bool, IResolvable] = None,
  node_server_edition: str = None,
  node_storage_quota_in_mb: typing.Union[int, float] = None,
  node_vcores: typing.Union[int, float] = None,
  point_in_time_in_utc: str = None,
  preferred_primary_zone: str = None,
  shards_on_coordinator_enabled: typing.Union[bool, IResolvable] = None,
  source_location: str = None,
  source_resource_id: str = None,
  sql_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: CosmosdbPostgresqlClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.citusVersion">citus_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorPublicIpAccessEnabled">coordinator_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorServerEdition">coordinator_server_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorStorageQuotaInMb">coordinator_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorVcoreCount">coordinator_vcore_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodePublicIpAccessEnabled">node_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeServerEdition">node_server_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeStorageQuotaInMb">node_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeVcores">node_vcores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.pointInTimeInUtc">point_in_time_in_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.preferredPrimaryZone">preferred_primary_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.shardsOnCoordinatorEnabled">shards_on_coordinator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sourceLocation">source_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sqlVersion">sql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}.

---

##### `citus_version`<sup>Optional</sup> <a name="citus_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.citusVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}.

---

##### `coordinator_public_ip_access_enabled`<sup>Optional</sup> <a name="coordinator_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorPublicIpAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}.

---

##### `coordinator_server_edition`<sup>Optional</sup> <a name="coordinator_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorServerEdition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}.

---

##### `coordinator_storage_quota_in_mb`<sup>Optional</sup> <a name="coordinator_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorStorageQuotaInMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}.

---

##### `coordinator_vcore_count`<sup>Optional</sup> <a name="coordinator_vcore_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.coordinatorVcoreCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}.

---

##### `ha_enabled`<sup>Optional</sup> <a name="ha_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.haEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#maintenance_window CosmosdbPostgresqlCluster#maintenance_window}

---

##### `node_public_ip_access_enabled`<sup>Optional</sup> <a name="node_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodePublicIpAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}.

---

##### `node_server_edition`<sup>Optional</sup> <a name="node_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeServerEdition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}.

---

##### `node_storage_quota_in_mb`<sup>Optional</sup> <a name="node_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeStorageQuotaInMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}.

---

##### `node_vcores`<sup>Optional</sup> <a name="node_vcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.nodeVcores"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}.

---

##### `point_in_time_in_utc`<sup>Optional</sup> <a name="point_in_time_in_utc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.pointInTimeInUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}.

---

##### `preferred_primary_zone`<sup>Optional</sup> <a name="preferred_primary_zone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.preferredPrimaryZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}.

---

##### `shards_on_coordinator_enabled`<sup>Optional</sup> <a name="shards_on_coordinator_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.shardsOnCoordinatorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}.

---

##### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sourceLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}.

---

##### `source_resource_id`<sup>Optional</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sourceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}.

---

##### `sql_version`<sup>Optional</sup> <a name="sql_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.sqlVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#timeouts CosmosdbPostgresqlCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword">reset_administrator_login_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion">reset_citus_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled">reset_coordinator_public_ip_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition">reset_coordinator_server_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb">reset_coordinator_storage_quota_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount">reset_coordinator_vcore_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled">reset_ha_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled">reset_node_public_ip_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition">reset_node_server_edition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb">reset_node_storage_quota_in_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores">reset_node_vcores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc">reset_point_in_time_in_utc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone">reset_preferred_primary_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled">reset_shards_on_coordinator_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation">reset_source_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId">reset_source_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion">reset_sql_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_week: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow.parameter.dayOfWeek"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}.

---

###### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow.parameter.startHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}.

---

###### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putMaintenanceWindow.parameter.startMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}.

---

##### `reset_administrator_login_password` <a name="reset_administrator_login_password" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetAdministratorLoginPassword"></a>

```python
def reset_administrator_login_password() -> None
```

##### `reset_citus_version` <a name="reset_citus_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCitusVersion"></a>

```python
def reset_citus_version() -> None
```

##### `reset_coordinator_public_ip_access_enabled` <a name="reset_coordinator_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorPublicIpAccessEnabled"></a>

```python
def reset_coordinator_public_ip_access_enabled() -> None
```

##### `reset_coordinator_server_edition` <a name="reset_coordinator_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorServerEdition"></a>

```python
def reset_coordinator_server_edition() -> None
```

##### `reset_coordinator_storage_quota_in_mb` <a name="reset_coordinator_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorStorageQuotaInMb"></a>

```python
def reset_coordinator_storage_quota_in_mb() -> None
```

##### `reset_coordinator_vcore_count` <a name="reset_coordinator_vcore_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetCoordinatorVcoreCount"></a>

```python
def reset_coordinator_vcore_count() -> None
```

##### `reset_ha_enabled` <a name="reset_ha_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetHaEnabled"></a>

```python
def reset_ha_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_node_public_ip_access_enabled` <a name="reset_node_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodePublicIpAccessEnabled"></a>

```python
def reset_node_public_ip_access_enabled() -> None
```

##### `reset_node_server_edition` <a name="reset_node_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeServerEdition"></a>

```python
def reset_node_server_edition() -> None
```

##### `reset_node_storage_quota_in_mb` <a name="reset_node_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeStorageQuotaInMb"></a>

```python
def reset_node_storage_quota_in_mb() -> None
```

##### `reset_node_vcores` <a name="reset_node_vcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetNodeVcores"></a>

```python
def reset_node_vcores() -> None
```

##### `reset_point_in_time_in_utc` <a name="reset_point_in_time_in_utc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPointInTimeInUtc"></a>

```python
def reset_point_in_time_in_utc() -> None
```

##### `reset_preferred_primary_zone` <a name="reset_preferred_primary_zone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetPreferredPrimaryZone"></a>

```python
def reset_preferred_primary_zone() -> None
```

##### `reset_shards_on_coordinator_enabled` <a name="reset_shards_on_coordinator_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetShardsOnCoordinatorEnabled"></a>

```python
def reset_shards_on_coordinator_enabled() -> None
```

##### `reset_source_location` <a name="reset_source_location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceLocation"></a>

```python
def reset_source_location() -> None
```

##### `reset_source_resource_id` <a name="reset_source_resource_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSourceResourceId"></a>

```python
def reset_source_resource_id() -> None
```

##### `reset_sql_version` <a name="reset_sql_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetSqlVersion"></a>

```python
def reset_sql_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbPostgresqlCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbPostgresqlCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbPostgresqlCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbPostgresqlCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime">earliest_restore_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers">servers</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput">administrator_login_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput">citus_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput">coordinator_public_ip_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput">coordinator_server_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput">coordinator_storage_quota_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput">coordinator_vcore_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput">ha_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput">node_public_ip_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput">node_server_edition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput">node_storage_quota_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput">node_vcores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput">point_in_time_in_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput">preferred_primary_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput">shards_on_coordinator_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput">source_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput">source_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput">sql_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion">citus_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled">coordinator_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition">coordinator_server_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb">coordinator_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount">coordinator_vcore_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled">node_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition">node_server_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb">node_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores">node_vcores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc">point_in_time_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone">preferred_primary_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled">shards_on_coordinator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation">source_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion">sql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `earliest_restore_time`<sup>Required</sup> <a name="earliest_restore_time" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.earliestRestoreTime"></a>

```python
earliest_restore_time: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindow"></a>

```python
maintenance_window: CosmosdbPostgresqlClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference">CosmosdbPostgresqlClusterMaintenanceWindowOutputReference</a>

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.servers"></a>

```python
servers: CosmosdbPostgresqlClusterServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList">CosmosdbPostgresqlClusterServersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference">CosmosdbPostgresqlClusterTimeoutsOutputReference</a>

---

##### `administrator_login_password_input`<sup>Optional</sup> <a name="administrator_login_password_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPasswordInput"></a>

```python
administrator_login_password_input: str
```

- *Type:* str

---

##### `citus_version_input`<sup>Optional</sup> <a name="citus_version_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersionInput"></a>

```python
citus_version_input: str
```

- *Type:* str

---

##### `coordinator_public_ip_access_enabled_input`<sup>Optional</sup> <a name="coordinator_public_ip_access_enabled_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabledInput"></a>

```python
coordinator_public_ip_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `coordinator_server_edition_input`<sup>Optional</sup> <a name="coordinator_server_edition_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEditionInput"></a>

```python
coordinator_server_edition_input: str
```

- *Type:* str

---

##### `coordinator_storage_quota_in_mb_input`<sup>Optional</sup> <a name="coordinator_storage_quota_in_mb_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMbInput"></a>

```python
coordinator_storage_quota_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `coordinator_vcore_count_input`<sup>Optional</sup> <a name="coordinator_vcore_count_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCountInput"></a>

```python
coordinator_vcore_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_enabled_input`<sup>Optional</sup> <a name="ha_enabled_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabledInput"></a>

```python
ha_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_public_ip_access_enabled_input`<sup>Optional</sup> <a name="node_public_ip_access_enabled_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabledInput"></a>

```python
node_public_ip_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_server_edition_input`<sup>Optional</sup> <a name="node_server_edition_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEditionInput"></a>

```python
node_server_edition_input: str
```

- *Type:* str

---

##### `node_storage_quota_in_mb_input`<sup>Optional</sup> <a name="node_storage_quota_in_mb_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMbInput"></a>

```python
node_storage_quota_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_vcores_input`<sup>Optional</sup> <a name="node_vcores_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcoresInput"></a>

```python
node_vcores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_in_time_in_utc_input`<sup>Optional</sup> <a name="point_in_time_in_utc_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtcInput"></a>

```python
point_in_time_in_utc_input: str
```

- *Type:* str

---

##### `preferred_primary_zone_input`<sup>Optional</sup> <a name="preferred_primary_zone_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZoneInput"></a>

```python
preferred_primary_zone_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `shards_on_coordinator_enabled_input`<sup>Optional</sup> <a name="shards_on_coordinator_enabled_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabledInput"></a>

```python
shards_on_coordinator_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_location_input`<sup>Optional</sup> <a name="source_location_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocationInput"></a>

```python
source_location_input: str
```

- *Type:* str

---

##### `source_resource_id_input`<sup>Optional</sup> <a name="source_resource_id_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceIdInput"></a>

```python
source_resource_id_input: str
```

- *Type:* str

---

##### `sql_version_input`<sup>Optional</sup> <a name="sql_version_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersionInput"></a>

```python
sql_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbPostgresqlClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>]

---

##### `administrator_login_password`<sup>Required</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

---

##### `citus_version`<sup>Required</sup> <a name="citus_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.citusVersion"></a>

```python
citus_version: str
```

- *Type:* str

---

##### `coordinator_public_ip_access_enabled`<sup>Required</sup> <a name="coordinator_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorPublicIpAccessEnabled"></a>

```python
coordinator_public_ip_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `coordinator_server_edition`<sup>Required</sup> <a name="coordinator_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorServerEdition"></a>

```python
coordinator_server_edition: str
```

- *Type:* str

---

##### `coordinator_storage_quota_in_mb`<sup>Required</sup> <a name="coordinator_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorStorageQuotaInMb"></a>

```python
coordinator_storage_quota_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `coordinator_vcore_count`<sup>Required</sup> <a name="coordinator_vcore_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.coordinatorVcoreCount"></a>

```python
coordinator_vcore_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ha_enabled`<sup>Required</sup> <a name="ha_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.haEnabled"></a>

```python
ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_public_ip_access_enabled`<sup>Required</sup> <a name="node_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodePublicIpAccessEnabled"></a>

```python
node_public_ip_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `node_server_edition`<sup>Required</sup> <a name="node_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeServerEdition"></a>

```python
node_server_edition: str
```

- *Type:* str

---

##### `node_storage_quota_in_mb`<sup>Required</sup> <a name="node_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeStorageQuotaInMb"></a>

```python
node_storage_quota_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_vcores`<sup>Required</sup> <a name="node_vcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.nodeVcores"></a>

```python
node_vcores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `point_in_time_in_utc`<sup>Required</sup> <a name="point_in_time_in_utc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.pointInTimeInUtc"></a>

```python
point_in_time_in_utc: str
```

- *Type:* str

---

##### `preferred_primary_zone`<sup>Required</sup> <a name="preferred_primary_zone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.preferredPrimaryZone"></a>

```python
preferred_primary_zone: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shards_on_coordinator_enabled`<sup>Required</sup> <a name="shards_on_coordinator_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.shardsOnCoordinatorEnabled"></a>

```python
shards_on_coordinator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_location`<sup>Required</sup> <a name="source_location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

---

##### `source_resource_id`<sup>Required</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

---

##### `sql_version`<sup>Required</sup> <a name="sql_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.sqlVersion"></a>

```python
sql_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlClusterConfig <a name="CosmosdbPostgresqlClusterConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  node_count: typing.Union[int, float],
  resource_group_name: str,
  administrator_login_password: str = None,
  citus_version: str = None,
  coordinator_public_ip_access_enabled: typing.Union[bool, IResolvable] = None,
  coordinator_server_edition: str = None,
  coordinator_storage_quota_in_mb: typing.Union[int, float] = None,
  coordinator_vcore_count: typing.Union[int, float] = None,
  ha_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  maintenance_window: CosmosdbPostgresqlClusterMaintenanceWindow = None,
  node_public_ip_access_enabled: typing.Union[bool, IResolvable] = None,
  node_server_edition: str = None,
  node_storage_quota_in_mb: typing.Union[int, float] = None,
  node_vcores: typing.Union[int, float] = None,
  point_in_time_in_utc: str = None,
  preferred_primary_zone: str = None,
  shards_on_coordinator_enabled: typing.Union[bool, IResolvable] = None,
  source_location: str = None,
  source_resource_id: str = None,
  sql_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: CosmosdbPostgresqlClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion">citus_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled">coordinator_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition">coordinator_server_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb">coordinator_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount">coordinator_vcore_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled">ha_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled">node_public_ip_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition">node_server_edition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb">node_storage_quota_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores">node_vcores</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc">point_in_time_in_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone">preferred_primary_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled">shards_on_coordinator_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation">source_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId">source_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion">sql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#location CosmosdbPostgresqlCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#name CosmosdbPostgresqlCluster#name}.

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_count CosmosdbPostgresqlCluster#node_count}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#resource_group_name CosmosdbPostgresqlCluster#resource_group_name}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#administrator_login_password CosmosdbPostgresqlCluster#administrator_login_password}.

---

##### `citus_version`<sup>Optional</sup> <a name="citus_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.citusVersion"></a>

```python
citus_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#citus_version CosmosdbPostgresqlCluster#citus_version}.

---

##### `coordinator_public_ip_access_enabled`<sup>Optional</sup> <a name="coordinator_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorPublicIpAccessEnabled"></a>

```python
coordinator_public_ip_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_public_ip_access_enabled CosmosdbPostgresqlCluster#coordinator_public_ip_access_enabled}.

---

##### `coordinator_server_edition`<sup>Optional</sup> <a name="coordinator_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorServerEdition"></a>

```python
coordinator_server_edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_server_edition CosmosdbPostgresqlCluster#coordinator_server_edition}.

---

##### `coordinator_storage_quota_in_mb`<sup>Optional</sup> <a name="coordinator_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorStorageQuotaInMb"></a>

```python
coordinator_storage_quota_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_storage_quota_in_mb CosmosdbPostgresqlCluster#coordinator_storage_quota_in_mb}.

---

##### `coordinator_vcore_count`<sup>Optional</sup> <a name="coordinator_vcore_count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.coordinatorVcoreCount"></a>

```python
coordinator_vcore_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#coordinator_vcore_count CosmosdbPostgresqlCluster#coordinator_vcore_count}.

---

##### `ha_enabled`<sup>Optional</sup> <a name="ha_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.haEnabled"></a>

```python
ha_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#ha_enabled CosmosdbPostgresqlCluster#ha_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#id CosmosdbPostgresqlCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#maintenance_window CosmosdbPostgresqlCluster#maintenance_window}

---

##### `node_public_ip_access_enabled`<sup>Optional</sup> <a name="node_public_ip_access_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodePublicIpAccessEnabled"></a>

```python
node_public_ip_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_public_ip_access_enabled CosmosdbPostgresqlCluster#node_public_ip_access_enabled}.

---

##### `node_server_edition`<sup>Optional</sup> <a name="node_server_edition" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeServerEdition"></a>

```python
node_server_edition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_server_edition CosmosdbPostgresqlCluster#node_server_edition}.

---

##### `node_storage_quota_in_mb`<sup>Optional</sup> <a name="node_storage_quota_in_mb" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeStorageQuotaInMb"></a>

```python
node_storage_quota_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_storage_quota_in_mb CosmosdbPostgresqlCluster#node_storage_quota_in_mb}.

---

##### `node_vcores`<sup>Optional</sup> <a name="node_vcores" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.nodeVcores"></a>

```python
node_vcores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#node_vcores CosmosdbPostgresqlCluster#node_vcores}.

---

##### `point_in_time_in_utc`<sup>Optional</sup> <a name="point_in_time_in_utc" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.pointInTimeInUtc"></a>

```python
point_in_time_in_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#point_in_time_in_utc CosmosdbPostgresqlCluster#point_in_time_in_utc}.

---

##### `preferred_primary_zone`<sup>Optional</sup> <a name="preferred_primary_zone" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.preferredPrimaryZone"></a>

```python
preferred_primary_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#preferred_primary_zone CosmosdbPostgresqlCluster#preferred_primary_zone}.

---

##### `shards_on_coordinator_enabled`<sup>Optional</sup> <a name="shards_on_coordinator_enabled" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.shardsOnCoordinatorEnabled"></a>

```python
shards_on_coordinator_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#shards_on_coordinator_enabled CosmosdbPostgresqlCluster#shards_on_coordinator_enabled}.

---

##### `source_location`<sup>Optional</sup> <a name="source_location" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceLocation"></a>

```python
source_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_location CosmosdbPostgresqlCluster#source_location}.

---

##### `source_resource_id`<sup>Optional</sup> <a name="source_resource_id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sourceResourceId"></a>

```python
source_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#source_resource_id CosmosdbPostgresqlCluster#source_resource_id}.

---

##### `sql_version`<sup>Optional</sup> <a name="sql_version" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.sqlVersion"></a>

```python
sql_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#sql_version CosmosdbPostgresqlCluster#sql_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#tags CosmosdbPostgresqlCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterConfig.property.timeouts"></a>

```python
timeouts: CosmosdbPostgresqlClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#timeouts CosmosdbPostgresqlCluster#timeouts}

---

### CosmosdbPostgresqlClusterMaintenanceWindow <a name="CosmosdbPostgresqlClusterMaintenanceWindow" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow(
  day_of_week: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#day_of_week CosmosdbPostgresqlCluster#day_of_week}.

---

##### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_hour CosmosdbPostgresqlCluster#start_hour}.

---

##### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#start_minute CosmosdbPostgresqlCluster#start_minute}.

---

### CosmosdbPostgresqlClusterServers <a name="CosmosdbPostgresqlClusterServers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers()
```


### CosmosdbPostgresqlClusterTimeouts <a name="CosmosdbPostgresqlClusterTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#create CosmosdbPostgresqlCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#delete CosmosdbPostgresqlCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#read CosmosdbPostgresqlCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/resources/cosmosdb_postgresql_cluster#update CosmosdbPostgresqlCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlClusterMaintenanceWindowOutputReference <a name="CosmosdbPostgresqlClusterMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour">reset_start_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute">reset_start_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_start_hour` <a name="reset_start_hour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartHour"></a>

```python
def reset_start_hour() -> None
```

##### `reset_start_minute` <a name="reset_start_minute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.resetStartMinute"></a>

```python
def reset_start_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput">start_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute_input`<sup>Optional</sup> <a name="start_minute_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```python
start_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute`<sup>Required</sup> <a name="start_minute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbPostgresqlClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterMaintenanceWindow">CosmosdbPostgresqlClusterMaintenanceWindow</a>

---


### CosmosdbPostgresqlClusterServersList <a name="CosmosdbPostgresqlClusterServersList" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbPostgresqlClusterServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CosmosdbPostgresqlClusterServersOutputReference <a name="CosmosdbPostgresqlClusterServersOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServersOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbPostgresqlClusterServers
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterServers">CosmosdbPostgresqlClusterServers</a>

---


### CosmosdbPostgresqlClusterTimeoutsOutputReference <a name="CosmosdbPostgresqlClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_postgresql_cluster

cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbPostgresqlClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlCluster.CosmosdbPostgresqlClusterTimeouts">CosmosdbPostgresqlClusterTimeouts</a>]

---



