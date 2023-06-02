# `azurerm_postgresql_flexible_server`

Refer to the Terraform Registory for docs: [`azurerm_postgresql_flexible_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server).

# `postgresqlFlexibleServer` Submodule <a name="`postgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.postgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlFlexibleServer <a name="PostgresqlFlexibleServer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server azurerm_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServer(
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
  resource_group_name: str,
  administrator_login: str = None,
  administrator_password: str = None,
  authentication: PostgresqlFlexibleServerAuthentication = None,
  backup_retention_days: typing.Union[int, float] = None,
  create_mode: str = None,
  customer_managed_key: PostgresqlFlexibleServerCustomerManagedKey = None,
  delegated_subnet_id: str = None,
  geo_redundant_backup_enabled: typing.Union[bool, IResolvable] = None,
  high_availability: PostgresqlFlexibleServerHighAvailability = None,
  id: str = None,
  identity: PostgresqlFlexibleServerIdentity = None,
  maintenance_window: PostgresqlFlexibleServerMaintenanceWindow = None,
  point_in_time_restore_time_in_utc: str = None,
  private_dns_zone_id: str = None,
  replication_role: str = None,
  sku_name: str = None,
  source_server_id: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PostgresqlFlexibleServerTimeouts = None,
  version: str = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.administratorPassword">administrator_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.delegatedSubnetId">delegated_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.highAvailability">high_availability</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | high_availability block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.pointInTimeRestoreTimeInUtc">point_in_time_restore_time_in_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.privateDnsZoneId">private_dns_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.replicationRole">replication_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.sourceServerId">source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}.

---

##### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.administratorPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#authentication PostgresqlFlexibleServer#authentication}

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.backupRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.createMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.customerManagedKey"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#customer_managed_key PostgresqlFlexibleServer#customer_managed_key}

---

##### `delegated_subnet_id`<sup>Optional</sup> <a name="delegated_subnet_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.delegatedSubnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.geoRedundantBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}.

---

##### `high_availability`<sup>Optional</sup> <a name="high_availability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.highAvailability"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

high_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#high_availability PostgresqlFlexibleServer#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#identity PostgresqlFlexibleServer#identity}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#maintenance_window PostgresqlFlexibleServer#maintenance_window}

---

##### `point_in_time_restore_time_in_utc`<sup>Optional</sup> <a name="point_in_time_restore_time_in_utc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.pointInTimeRestoreTimeInUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}.

---

##### `private_dns_zone_id`<sup>Optional</sup> <a name="private_dns_zone_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.privateDnsZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}.

---

##### `replication_role`<sup>Optional</sup> <a name="replication_role" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.replicationRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}.

---

##### `sku_name`<sup>Optional</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}.

---

##### `source_server_id`<sup>Optional</sup> <a name="source_server_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.sourceServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.storageMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#timeouts PostgresqlFlexibleServer#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.Initializer.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey">put_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability">put_high_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorLogin">reset_administrator_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPassword">reset_administrator_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetBackupRetentionDays">reset_backup_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCreateMode">reset_create_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCustomerManagedKey">reset_customer_managed_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetDelegatedSubnetId">reset_delegated_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetGeoRedundantBackupEnabled">reset_geo_redundant_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetHighAvailability">reset_high_availability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPointInTimeRestoreTimeInUtc">reset_point_in_time_restore_time_in_utc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPrivateDnsZoneId">reset_private_dns_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetReplicationRole">reset_replication_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSkuName">reset_sku_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSourceServerId">reset_source_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageMb">reset_storage_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication"></a>

```python
def put_authentication(
  active_directory_auth_enabled: typing.Union[bool, IResolvable] = None,
  password_auth_enabled: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None
) -> None
```

###### `active_directory_auth_enabled`<sup>Optional</sup> <a name="active_directory_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication.parameter.activeDirectoryAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#active_directory_auth_enabled PostgresqlFlexibleServer#active_directory_auth_enabled}.

---

###### `password_auth_enabled`<sup>Optional</sup> <a name="password_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication.parameter.passwordAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#password_auth_enabled PostgresqlFlexibleServer#password_auth_enabled}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putAuthentication.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tenant_id PostgresqlFlexibleServer#tenant_id}.

---

##### `put_customer_managed_key` <a name="put_customer_managed_key" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey"></a>

```python
def put_customer_managed_key(
  key_vault_key_id: str = None,
  primary_user_assigned_identity_id: str = None
) -> None
```

###### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#key_vault_key_id PostgresqlFlexibleServer#key_vault_key_id}.

---

###### `primary_user_assigned_identity_id`<sup>Optional</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putCustomerManagedKey.parameter.primaryUserAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#primary_user_assigned_identity_id PostgresqlFlexibleServer#primary_user_assigned_identity_id}.

---

##### `put_high_availability` <a name="put_high_availability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability"></a>

```python
def put_high_availability(
  mode: str,
  standby_availability_zone: str = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#mode PostgresqlFlexibleServer#mode}.

---

###### `standby_availability_zone`<sup>Optional</sup> <a name="standby_availability_zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putHighAvailability.parameter.standbyAvailabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#type PostgresqlFlexibleServer#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#identity_ids PostgresqlFlexibleServer#identity_ids}.

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_week: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
) -> None
```

###### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow.parameter.dayOfWeek"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#day_of_week PostgresqlFlexibleServer#day_of_week}.

---

###### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow.parameter.startHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_hour PostgresqlFlexibleServer#start_hour}.

---

###### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putMaintenanceWindow.parameter.startMinute"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_minute PostgresqlFlexibleServer#start_minute}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create PostgresqlFlexibleServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delete PostgresqlFlexibleServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#read PostgresqlFlexibleServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#update PostgresqlFlexibleServer#update}.

---

##### `reset_administrator_login` <a name="reset_administrator_login" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorLogin"></a>

```python
def reset_administrator_login() -> None
```

##### `reset_administrator_password` <a name="reset_administrator_password" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAdministratorPassword"></a>

```python
def reset_administrator_password() -> None
```

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_backup_retention_days` <a name="reset_backup_retention_days" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetBackupRetentionDays"></a>

```python
def reset_backup_retention_days() -> None
```

##### `reset_create_mode` <a name="reset_create_mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCreateMode"></a>

```python
def reset_create_mode() -> None
```

##### `reset_customer_managed_key` <a name="reset_customer_managed_key" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetCustomerManagedKey"></a>

```python
def reset_customer_managed_key() -> None
```

##### `reset_delegated_subnet_id` <a name="reset_delegated_subnet_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetDelegatedSubnetId"></a>

```python
def reset_delegated_subnet_id() -> None
```

##### `reset_geo_redundant_backup_enabled` <a name="reset_geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetGeoRedundantBackupEnabled"></a>

```python
def reset_geo_redundant_backup_enabled() -> None
```

##### `reset_high_availability` <a name="reset_high_availability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetHighAvailability"></a>

```python
def reset_high_availability() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_point_in_time_restore_time_in_utc` <a name="reset_point_in_time_restore_time_in_utc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPointInTimeRestoreTimeInUtc"></a>

```python
def reset_point_in_time_restore_time_in_utc() -> None
```

##### `reset_private_dns_zone_id` <a name="reset_private_dns_zone_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetPrivateDnsZoneId"></a>

```python
def reset_private_dns_zone_id() -> None
```

##### `reset_replication_role` <a name="reset_replication_role" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetReplicationRole"></a>

```python
def reset_replication_role() -> None
```

##### `reset_sku_name` <a name="reset_sku_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSkuName"></a>

```python
def reset_sku_name() -> None
```

##### `reset_source_server_id` <a name="reset_source_server_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetSourceServerId"></a>

```python
def reset_source_server_id() -> None
```

##### `reset_storage_mb` <a name="reset_storage_mb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetStorageMb"></a>

```python
def reset_storage_mb() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference">PostgresqlFlexibleServerAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference">PostgresqlFlexibleServerCustomerManagedKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailability">high_availability</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference">PostgresqlFlexibleServerHighAvailabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference">PostgresqlFlexibleServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference">PostgresqlFlexibleServerMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference">PostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordInput">administrator_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDaysInput">backup_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createModeInput">create_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKeyInput">customer_managed_key_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetIdInput">delegated_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabledInput">geo_redundant_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailabilityInput">high_availability_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput">point_in_time_restore_time_in_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneIdInput">private_dns_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRoleInput">replication_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerIdInput">source_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMbInput">storage_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPassword">administrator_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createMode">create_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetId">delegated_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtc">point_in_time_restore_time_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneId">private_dns_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRole">replication_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerId">source_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authentication"></a>

```python
authentication: PostgresqlFlexibleServerAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference">PostgresqlFlexibleServerAuthenticationOutputReference</a>

---

##### `customer_managed_key`<sup>Required</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKey"></a>

```python
customer_managed_key: PostgresqlFlexibleServerCustomerManagedKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference">PostgresqlFlexibleServerCustomerManagedKeyOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `high_availability`<sup>Required</sup> <a name="high_availability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailability"></a>

```python
high_availability: PostgresqlFlexibleServerHighAvailabilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference">PostgresqlFlexibleServerHighAvailabilityOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identity"></a>

```python
identity: PostgresqlFlexibleServerIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference">PostgresqlFlexibleServerIdentityOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindow"></a>

```python
maintenance_window: PostgresqlFlexibleServerMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference">PostgresqlFlexibleServerMaintenanceWindowOutputReference</a>

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeouts"></a>

```python
timeouts: PostgresqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference">PostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_password_input`<sup>Optional</sup> <a name="administrator_password_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPasswordInput"></a>

```python
administrator_password_input: str
```

- *Type:* str

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.authenticationInput"></a>

```python
authentication_input: PostgresqlFlexibleServerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

---

##### `backup_retention_days_input`<sup>Optional</sup> <a name="backup_retention_days_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDaysInput"></a>

```python
backup_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode_input`<sup>Optional</sup> <a name="create_mode_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createModeInput"></a>

```python
create_mode_input: str
```

- *Type:* str

---

##### `customer_managed_key_input`<sup>Optional</sup> <a name="customer_managed_key_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.customerManagedKeyInput"></a>

```python
customer_managed_key_input: PostgresqlFlexibleServerCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

---

##### `delegated_subnet_id_input`<sup>Optional</sup> <a name="delegated_subnet_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetIdInput"></a>

```python
delegated_subnet_id_input: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled_input`<sup>Optional</sup> <a name="geo_redundant_backup_enabled_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabledInput"></a>

```python
geo_redundant_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `high_availability_input`<sup>Optional</sup> <a name="high_availability_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.highAvailabilityInput"></a>

```python
high_availability_input: PostgresqlFlexibleServerHighAvailability
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.identityInput"></a>

```python
identity_input: PostgresqlFlexibleServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: PostgresqlFlexibleServerMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `point_in_time_restore_time_in_utc_input`<sup>Optional</sup> <a name="point_in_time_restore_time_in_utc_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtcInput"></a>

```python
point_in_time_restore_time_in_utc_input: str
```

- *Type:* str

---

##### `private_dns_zone_id_input`<sup>Optional</sup> <a name="private_dns_zone_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneIdInput"></a>

```python
private_dns_zone_id_input: str
```

- *Type:* str

---

##### `replication_role_input`<sup>Optional</sup> <a name="replication_role_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRoleInput"></a>

```python
replication_role_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `source_server_id_input`<sup>Optional</sup> <a name="source_server_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerIdInput"></a>

```python
source_server_id_input: str
```

- *Type:* str

---

##### `storage_mb_input`<sup>Optional</sup> <a name="storage_mb_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMbInput"></a>

```python
storage_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PostgresqlFlexibleServerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>, cdktf.IResolvable]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_password`<sup>Required</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode`<sup>Required</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

---

##### `delegated_subnet_id`<sup>Required</sup> <a name="delegated_subnet_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.delegatedSubnetId"></a>

```python
delegated_subnet_id: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled`<sup>Required</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `point_in_time_restore_time_in_utc`<sup>Required</sup> <a name="point_in_time_restore_time_in_utc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.pointInTimeRestoreTimeInUtc"></a>

```python
point_in_time_restore_time_in_utc: str
```

- *Type:* str

---

##### `private_dns_zone_id`<sup>Required</sup> <a name="private_dns_zone_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.privateDnsZoneId"></a>

```python
private_dns_zone_id: str
```

- *Type:* str

---

##### `replication_role`<sup>Required</sup> <a name="replication_role" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.replicationRole"></a>

```python
replication_role: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `source_server_id`<sup>Required</sup> <a name="source_server_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.sourceServerId"></a>

```python
source_server_id: str
```

- *Type:* str

---

##### `storage_mb`<sup>Required</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlFlexibleServerAuthentication <a name="PostgresqlFlexibleServerAuthentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication(
  active_directory_auth_enabled: typing.Union[bool, IResolvable] = None,
  password_auth_enabled: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.activeDirectoryAuthEnabled">active_directory_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#active_directory_auth_enabled PostgresqlFlexibleServer#active_directory_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.passwordAuthEnabled">password_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#password_auth_enabled PostgresqlFlexibleServer#password_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tenant_id PostgresqlFlexibleServer#tenant_id}. |

---

##### `active_directory_auth_enabled`<sup>Optional</sup> <a name="active_directory_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.activeDirectoryAuthEnabled"></a>

```python
active_directory_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#active_directory_auth_enabled PostgresqlFlexibleServer#active_directory_auth_enabled}.

---

##### `password_auth_enabled`<sup>Optional</sup> <a name="password_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.passwordAuthEnabled"></a>

```python
password_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#password_auth_enabled PostgresqlFlexibleServer#password_auth_enabled}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tenant_id PostgresqlFlexibleServer#tenant_id}.

---

### PostgresqlFlexibleServerConfig <a name="PostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  administrator_login: str = None,
  administrator_password: str = None,
  authentication: PostgresqlFlexibleServerAuthentication = None,
  backup_retention_days: typing.Union[int, float] = None,
  create_mode: str = None,
  customer_managed_key: PostgresqlFlexibleServerCustomerManagedKey = None,
  delegated_subnet_id: str = None,
  geo_redundant_backup_enabled: typing.Union[bool, IResolvable] = None,
  high_availability: PostgresqlFlexibleServerHighAvailability = None,
  id: str = None,
  identity: PostgresqlFlexibleServerIdentity = None,
  maintenance_window: PostgresqlFlexibleServerMaintenanceWindow = None,
  point_in_time_restore_time_in_utc: str = None,
  private_dns_zone_id: str = None,
  replication_role: str = None,
  sku_name: str = None,
  source_server_id: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PostgresqlFlexibleServerTimeouts = None,
  version: str = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPassword">administrator_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.customerManagedKey">customer_managed_key</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | customer_managed_key block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.delegatedSubnetId">delegated_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.highAvailability">high_availability</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | high_availability block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc">point_in_time_restore_time_in_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.privateDnsZoneId">private_dns_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.replicationRole">replication_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.sourceServerId">source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#location PostgresqlFlexibleServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#name PostgresqlFlexibleServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#resource_group_name PostgresqlFlexibleServer#resource_group_name}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_login PostgresqlFlexibleServer#administrator_login}.

---

##### `administrator_password`<sup>Optional</sup> <a name="administrator_password" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.administratorPassword"></a>

```python
administrator_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#administrator_password PostgresqlFlexibleServer#administrator_password}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.authentication"></a>

```python
authentication: PostgresqlFlexibleServerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#authentication PostgresqlFlexibleServer#authentication}

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#backup_retention_days PostgresqlFlexibleServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create_mode PostgresqlFlexibleServer#create_mode}.

---

##### `customer_managed_key`<sup>Optional</sup> <a name="customer_managed_key" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.customerManagedKey"></a>

```python
customer_managed_key: PostgresqlFlexibleServerCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

customer_managed_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#customer_managed_key PostgresqlFlexibleServer#customer_managed_key}

---

##### `delegated_subnet_id`<sup>Optional</sup> <a name="delegated_subnet_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.delegatedSubnetId"></a>

```python
delegated_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delegated_subnet_id PostgresqlFlexibleServer#delegated_subnet_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#geo_redundant_backup_enabled PostgresqlFlexibleServer#geo_redundant_backup_enabled}.

---

##### `high_availability`<sup>Optional</sup> <a name="high_availability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.highAvailability"></a>

```python
high_availability: PostgresqlFlexibleServerHighAvailability
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

high_availability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#high_availability PostgresqlFlexibleServer#high_availability}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#id PostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.identity"></a>

```python
identity: PostgresqlFlexibleServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#identity PostgresqlFlexibleServer#identity}

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.maintenanceWindow"></a>

```python
maintenance_window: PostgresqlFlexibleServerMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#maintenance_window PostgresqlFlexibleServer#maintenance_window}

---

##### `point_in_time_restore_time_in_utc`<sup>Optional</sup> <a name="point_in_time_restore_time_in_utc" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.pointInTimeRestoreTimeInUtc"></a>

```python
point_in_time_restore_time_in_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#point_in_time_restore_time_in_utc PostgresqlFlexibleServer#point_in_time_restore_time_in_utc}.

---

##### `private_dns_zone_id`<sup>Optional</sup> <a name="private_dns_zone_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.privateDnsZoneId"></a>

```python
private_dns_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#private_dns_zone_id PostgresqlFlexibleServer#private_dns_zone_id}.

---

##### `replication_role`<sup>Optional</sup> <a name="replication_role" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.replicationRole"></a>

```python
replication_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#replication_role PostgresqlFlexibleServer#replication_role}.

---

##### `sku_name`<sup>Optional</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#sku_name PostgresqlFlexibleServer#sku_name}.

---

##### `source_server_id`<sup>Optional</sup> <a name="source_server_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.sourceServerId"></a>

```python
source_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#source_server_id PostgresqlFlexibleServer#source_server_id}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#storage_mb PostgresqlFlexibleServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#tags PostgresqlFlexibleServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.timeouts"></a>

```python
timeouts: PostgresqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#timeouts PostgresqlFlexibleServer#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#version PostgresqlFlexibleServer#version}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#zone PostgresqlFlexibleServer#zone}.

---

### PostgresqlFlexibleServerCustomerManagedKey <a name="PostgresqlFlexibleServerCustomerManagedKey" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey(
  key_vault_key_id: str = None,
  primary_user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#key_vault_key_id PostgresqlFlexibleServer#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId">primary_user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#primary_user_assigned_identity_id PostgresqlFlexibleServer#primary_user_assigned_identity_id}. |

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#key_vault_key_id PostgresqlFlexibleServer#key_vault_key_id}.

---

##### `primary_user_assigned_identity_id`<sup>Optional</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey.property.primaryUserAssignedIdentityId"></a>

```python
primary_user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#primary_user_assigned_identity_id PostgresqlFlexibleServer#primary_user_assigned_identity_id}.

---

### PostgresqlFlexibleServerHighAvailability <a name="PostgresqlFlexibleServerHighAvailability" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability(
  mode: str,
  standby_availability_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#mode PostgresqlFlexibleServer#mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.standbyAvailabilityZone">standby_availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#mode PostgresqlFlexibleServer#mode}.

---

##### `standby_availability_zone`<sup>Optional</sup> <a name="standby_availability_zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability.property.standbyAvailabilityZone"></a>

```python
standby_availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#standby_availability_zone PostgresqlFlexibleServer#standby_availability_zone}.

---

### PostgresqlFlexibleServerIdentity <a name="PostgresqlFlexibleServerIdentity" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#type PostgresqlFlexibleServer#type}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#identity_ids PostgresqlFlexibleServer#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#type PostgresqlFlexibleServer#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#identity_ids PostgresqlFlexibleServer#identity_ids}.

---

### PostgresqlFlexibleServerMaintenanceWindow <a name="PostgresqlFlexibleServerMaintenanceWindow" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow(
  day_of_week: typing.Union[int, float] = None,
  start_hour: typing.Union[int, float] = None,
  start_minute: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#day_of_week PostgresqlFlexibleServer#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_hour PostgresqlFlexibleServer#start_hour}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_minute PostgresqlFlexibleServer#start_minute}. |

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#day_of_week PostgresqlFlexibleServer#day_of_week}.

---

##### `start_hour`<sup>Optional</sup> <a name="start_hour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_hour PostgresqlFlexibleServer#start_hour}.

---

##### `start_minute`<sup>Optional</sup> <a name="start_minute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#start_minute PostgresqlFlexibleServer#start_minute}.

---

### PostgresqlFlexibleServerTimeouts <a name="PostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create PostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delete PostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#read PostgresqlFlexibleServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#update PostgresqlFlexibleServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#create PostgresqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#delete PostgresqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#read PostgresqlFlexibleServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/resources/postgresql_flexible_server#update PostgresqlFlexibleServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlFlexibleServerAuthenticationOutputReference <a name="PostgresqlFlexibleServerAuthenticationOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetActiveDirectoryAuthEnabled">reset_active_directory_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetPasswordAuthEnabled">reset_password_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_directory_auth_enabled` <a name="reset_active_directory_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetActiveDirectoryAuthEnabled"></a>

```python
def reset_active_directory_auth_enabled() -> None
```

##### `reset_password_auth_enabled` <a name="reset_password_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetPasswordAuthEnabled"></a>

```python
def reset_password_auth_enabled() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabledInput">active_directory_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabledInput">password_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabled">active_directory_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabled">password_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory_auth_enabled_input`<sup>Optional</sup> <a name="active_directory_auth_enabled_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabledInput"></a>

```python
active_directory_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_auth_enabled_input`<sup>Optional</sup> <a name="password_auth_enabled_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabledInput"></a>

```python
password_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `active_directory_auth_enabled`<sup>Required</sup> <a name="active_directory_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.activeDirectoryAuthEnabled"></a>

```python
active_directory_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password_auth_enabled`<sup>Required</sup> <a name="password_auth_enabled" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.passwordAuthEnabled"></a>

```python
password_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlFlexibleServerAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerAuthentication">PostgresqlFlexibleServerAuthentication</a>

---


### PostgresqlFlexibleServerCustomerManagedKeyOutputReference <a name="PostgresqlFlexibleServerCustomerManagedKeyOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId">reset_primary_user_assigned_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_primary_user_assigned_identity_id` <a name="reset_primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.resetPrimaryUserAssignedIdentityId"></a>

```python
def reset_primary_user_assigned_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput">primary_user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId">primary_user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `primary_user_assigned_identity_id_input`<sup>Optional</sup> <a name="primary_user_assigned_identity_id_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityIdInput"></a>

```python
primary_user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `primary_user_assigned_identity_id`<sup>Required</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.primaryUserAssignedIdentityId"></a>

```python
primary_user_assigned_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKeyOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlFlexibleServerCustomerManagedKey
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerCustomerManagedKey">PostgresqlFlexibleServerCustomerManagedKey</a>

---


### PostgresqlFlexibleServerHighAvailabilityOutputReference <a name="PostgresqlFlexibleServerHighAvailabilityOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone">reset_standby_availability_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_standby_availability_zone` <a name="reset_standby_availability_zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.resetStandbyAvailabilityZone"></a>

```python
def reset_standby_availability_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput">standby_availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone">standby_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `standby_availability_zone_input`<sup>Optional</sup> <a name="standby_availability_zone_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZoneInput"></a>

```python
standby_availability_zone_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `standby_availability_zone`<sup>Required</sup> <a name="standby_availability_zone" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.standbyAvailabilityZone"></a>

```python
standby_availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailabilityOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlFlexibleServerHighAvailability
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerHighAvailability">PostgresqlFlexibleServerHighAvailability</a>

---


### PostgresqlFlexibleServerIdentityOutputReference <a name="PostgresqlFlexibleServerIdentityOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentityOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlFlexibleServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerIdentity">PostgresqlFlexibleServerIdentity</a>

---


### PostgresqlFlexibleServerMaintenanceWindowOutputReference <a name="PostgresqlFlexibleServerMaintenanceWindowOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour">reset_start_hour</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute">reset_start_minute</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_week` <a name="reset_day_of_week" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_start_hour` <a name="reset_start_hour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartHour"></a>

```python
def reset_start_hour() -> None
```

##### `reset_start_minute` <a name="reset_start_minute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.resetStartMinute"></a>

```python
def reset_start_minute() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput">start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput">start_minute_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHour">start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute">start_minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour_input`<sup>Optional</sup> <a name="start_hour_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHourInput"></a>

```python
start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute_input`<sup>Optional</sup> <a name="start_minute_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinuteInput"></a>

```python
start_minute_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_hour`<sup>Required</sup> <a name="start_hour" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startHour"></a>

```python
start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `start_minute`<sup>Required</sup> <a name="start_minute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.startMinute"></a>

```python
start_minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlFlexibleServerMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerMaintenanceWindow">PostgresqlFlexibleServerMaintenanceWindow</a>

---


### PostgresqlFlexibleServerTimeoutsOutputReference <a name="PostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_flexible_server

postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PostgresqlFlexibleServerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.postgresqlFlexibleServer.PostgresqlFlexibleServerTimeouts">PostgresqlFlexibleServerTimeouts</a>, cdktf.IResolvable]

---



