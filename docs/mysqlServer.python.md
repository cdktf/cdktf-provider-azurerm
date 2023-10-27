# `azurerm_mysql_server`

Refer to the Terraform Registory for docs: [`azurerm_mysql_server`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server).

# `mysqlServer` Submodule <a name="`mysqlServer` Submodule" id="@cdktf/provider-azurerm.mysqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlServer <a name="MysqlServer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server azurerm_mysql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServer(
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
  sku_name: str,
  ssl_enforcement_enabled: typing.Union[bool, IResolvable],
  version: str,
  administrator_login: str = None,
  administrator_login_password: str = None,
  auto_grow_enabled: typing.Union[bool, IResolvable] = None,
  backup_retention_days: typing.Union[int, float] = None,
  create_mode: str = None,
  creation_source_server_id: str = None,
  geo_redundant_backup_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: MysqlServerIdentity = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore_point_in_time: str = None,
  ssl_minimal_tls_version_enforced: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threat_detection_policy: MysqlServerThreatDetectionPolicy = None,
  timeouts: MysqlServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#location MysqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#name MysqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#version MysqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#id MysqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#tags MysqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#location MysqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#name MysqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}.

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.sslEnforcementEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#version MysqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}.

---

##### `auto_grow_enabled`<sup>Optional</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.autoGrowEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}.

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.backupRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.createMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}.

---

##### `creation_source_server_id`<sup>Optional</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.creationSourceServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.geoRedundantBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#id MysqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#identity MysqlServer#identity}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}.

---

##### `restore_point_in_time`<sup>Optional</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.restorePointInTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}.

---

##### `ssl_minimal_tls_version_enforced`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.sslMinimalTlsVersionEnforced"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.storageMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#tags MysqlServer#tags}.

---

##### `threat_detection_policy`<sup>Optional</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.threatDetectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#threat_detection_policy MysqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#timeouts MysqlServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy">put_threat_detection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLogin">reset_administrator_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLoginPassword">reset_administrator_login_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAutoGrowEnabled">reset_auto_grow_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetBackupRetentionDays">reset_backup_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreateMode">reset_create_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreationSourceServerId">reset_creation_source_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetGeoRedundantBackupEnabled">reset_geo_redundant_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetRestorePointInTime">reset_restore_point_in_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetSslMinimalTlsVersionEnforced">reset_ssl_minimal_tls_version_enforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetStorageMb">reset_storage_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetThreatDetectionPolicy">reset_threat_detection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#type MysqlServer#type}.

---

##### `put_threat_detection_policy` <a name="put_threat_detection_policy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy"></a>

```python
def put_threat_detection_policy(
  disabled_alerts: typing.List[str] = None,
  email_account_admins: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None
) -> None
```

###### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.disabledAlerts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#disabled_alerts MysqlServer#disabled_alerts}.

---

###### `email_account_admins`<sup>Optional</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.emailAccountAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_account_admins MysqlServer#email_account_admins}.

---

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_addresses MysqlServer#email_addresses}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#enabled MysqlServer#enabled}.

---

###### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#retention_days MysqlServer#retention_days}.

---

###### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_account_access_key MysqlServer#storage_account_access_key}.

---

###### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putThreatDetectionPolicy.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_endpoint MysqlServer#storage_endpoint}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create MysqlServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#delete MysqlServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#read MysqlServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#update MysqlServer#update}.

---

##### `reset_administrator_login` <a name="reset_administrator_login" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLogin"></a>

```python
def reset_administrator_login() -> None
```

##### `reset_administrator_login_password` <a name="reset_administrator_login_password" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAdministratorLoginPassword"></a>

```python
def reset_administrator_login_password() -> None
```

##### `reset_auto_grow_enabled` <a name="reset_auto_grow_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetAutoGrowEnabled"></a>

```python
def reset_auto_grow_enabled() -> None
```

##### `reset_backup_retention_days` <a name="reset_backup_retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetBackupRetentionDays"></a>

```python
def reset_backup_retention_days() -> None
```

##### `reset_create_mode` <a name="reset_create_mode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreateMode"></a>

```python
def reset_create_mode() -> None
```

##### `reset_creation_source_server_id` <a name="reset_creation_source_server_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetCreationSourceServerId"></a>

```python
def reset_creation_source_server_id() -> None
```

##### `reset_geo_redundant_backup_enabled` <a name="reset_geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetGeoRedundantBackupEnabled"></a>

```python
def reset_geo_redundant_backup_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_restore_point_in_time` <a name="reset_restore_point_in_time" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetRestorePointInTime"></a>

```python
def reset_restore_point_in_time() -> None
```

##### `reset_ssl_minimal_tls_version_enforced` <a name="reset_ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetSslMinimalTlsVersionEnforced"></a>

```python
def reset_ssl_minimal_tls_version_enforced() -> None
```

##### `reset_storage_mb` <a name="reset_storage_mb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetStorageMb"></a>

```python
def reset_storage_mb() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_threat_detection_policy` <a name="reset_threat_detection_policy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetThreatDetectionPolicy"></a>

```python
def reset_threat_detection_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference">MysqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference">MysqlServerThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference">MysqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPasswordInput">administrator_login_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabledInput">auto_grow_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDaysInput">backup_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createModeInput">create_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerIdInput">creation_source_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabledInput">geo_redundant_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTimeInput">restore_point_in_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabledInput">ssl_enforcement_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforcedInput">ssl_minimal_tls_version_enforced_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMbInput">storage_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicyInput">threat_detection_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createMode">create_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identity"></a>

```python
identity: MysqlServerIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference">MysqlServerIdentityOutputReference</a>

---

##### `threat_detection_policy`<sup>Required</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicy"></a>

```python
threat_detection_policy: MysqlServerThreatDetectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference">MysqlServerThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeouts"></a>

```python
timeouts: MysqlServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference">MysqlServerTimeoutsOutputReference</a>

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_login_password_input`<sup>Optional</sup> <a name="administrator_login_password_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPasswordInput"></a>

```python
administrator_login_password_input: str
```

- *Type:* str

---

##### `auto_grow_enabled_input`<sup>Optional</sup> <a name="auto_grow_enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabledInput"></a>

```python
auto_grow_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_retention_days_input`<sup>Optional</sup> <a name="backup_retention_days_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDaysInput"></a>

```python
backup_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode_input`<sup>Optional</sup> <a name="create_mode_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createModeInput"></a>

```python
create_mode_input: str
```

- *Type:* str

---

##### `creation_source_server_id_input`<sup>Optional</sup> <a name="creation_source_server_id_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerIdInput"></a>

```python
creation_source_server_id_input: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled_input`<sup>Optional</sup> <a name="geo_redundant_backup_enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabledInput"></a>

```python
geo_redundant_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.identityInput"></a>

```python
identity_input: MysqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `restore_point_in_time_input`<sup>Optional</sup> <a name="restore_point_in_time_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTimeInput"></a>

```python
restore_point_in_time_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `ssl_enforcement_enabled_input`<sup>Optional</sup> <a name="ssl_enforcement_enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabledInput"></a>

```python
ssl_enforcement_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_minimal_tls_version_enforced_input`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```python
ssl_minimal_tls_version_enforced_input: str
```

- *Type:* str

---

##### `storage_mb_input`<sup>Optional</sup> <a name="storage_mb_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMbInput"></a>

```python
storage_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threat_detection_policy_input`<sup>Optional</sup> <a name="threat_detection_policy_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.threatDetectionPolicyInput"></a>

```python
threat_detection_policy_input: MysqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_login_password`<sup>Required</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

---

##### `auto_grow_enabled`<sup>Required</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.autoGrowEnabled"></a>

```python
auto_grow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode`<sup>Required</sup> <a name="create_mode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

---

##### `creation_source_server_id`<sup>Required</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.creationSourceServerId"></a>

```python
creation_source_server_id: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled`<sup>Required</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `restore_point_in_time`<sup>Required</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslEnforcementEnabled"></a>

```python
ssl_enforcement_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_minimal_tls_version_enforced`<sup>Required</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.sslMinimalTlsVersionEnforced"></a>

```python
ssl_minimal_tls_version_enforced: str
```

- *Type:* str

---

##### `storage_mb`<sup>Required</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mysqlServer.MysqlServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlServerConfig <a name="MysqlServerConfig" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerConfig(
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
  sku_name: str,
  ssl_enforcement_enabled: typing.Union[bool, IResolvable],
  version: str,
  administrator_login: str = None,
  administrator_login_password: str = None,
  auto_grow_enabled: typing.Union[bool, IResolvable] = None,
  backup_retention_days: typing.Union[int, float] = None,
  create_mode: str = None,
  creation_source_server_id: str = None,
  geo_redundant_backup_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: MysqlServerIdentity = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore_point_in_time: str = None,
  ssl_minimal_tls_version_enforced: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threat_detection_policy: MysqlServerThreatDetectionPolicy = None,
  timeouts: MysqlServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#location MysqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#name MysqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#version MysqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#id MysqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#tags MysqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#location MysqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#name MysqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#resource_group_name MysqlServer#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#sku_name MysqlServer#sku_name}.

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslEnforcementEnabled"></a>

```python
ssl_enforcement_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_enforcement_enabled MysqlServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#version MysqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login MysqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#administrator_login_password MysqlServer#administrator_login_password}.

---

##### `auto_grow_enabled`<sup>Optional</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.autoGrowEnabled"></a>

```python
auto_grow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#auto_grow_enabled MysqlServer#auto_grow_enabled}.

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#backup_retention_days MysqlServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create_mode MysqlServer#create_mode}.

---

##### `creation_source_server_id`<sup>Optional</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.creationSourceServerId"></a>

```python
creation_source_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#creation_source_server_id MysqlServer#creation_source_server_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#geo_redundant_backup_enabled MysqlServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#id MysqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.identity"></a>

```python
identity: MysqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#identity MysqlServer#identity}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#infrastructure_encryption_enabled MysqlServer#infrastructure_encryption_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#public_network_access_enabled MysqlServer#public_network_access_enabled}.

---

##### `restore_point_in_time`<sup>Optional</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#restore_point_in_time MysqlServer#restore_point_in_time}.

---

##### `ssl_minimal_tls_version_enforced`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```python
ssl_minimal_tls_version_enforced: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#ssl_minimal_tls_version_enforced MysqlServer#ssl_minimal_tls_version_enforced}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_mb MysqlServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#tags MysqlServer#tags}.

---

##### `threat_detection_policy`<sup>Optional</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.threatDetectionPolicy"></a>

```python
threat_detection_policy: MysqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#threat_detection_policy MysqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerConfig.property.timeouts"></a>

```python
timeouts: MysqlServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#timeouts MysqlServer#timeouts}

---

### MysqlServerIdentity <a name="MysqlServerIdentity" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#type MysqlServer#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#type MysqlServer#type}.

---

### MysqlServerThreatDetectionPolicy <a name="MysqlServerThreatDetectionPolicy" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerThreatDetectionPolicy(
  disabled_alerts: typing.List[str] = None,
  email_account_admins: typing.Union[bool, IResolvable] = None,
  email_addresses: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  retention_days: typing.Union[int, float] = None,
  storage_account_access_key: str = None,
  storage_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#disabled_alerts MysqlServer#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAccountAdmins">email_account_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_account_admins MysqlServer#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_addresses MysqlServer#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#enabled MysqlServer#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#retention_days MysqlServer#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_account_access_key MysqlServer#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_endpoint MysqlServer#storage_endpoint}. |

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#disabled_alerts MysqlServer#disabled_alerts}.

---

##### `email_account_admins`<sup>Optional</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAccountAdmins"></a>

```python
email_account_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_account_admins MysqlServer#email_account_admins}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#email_addresses MysqlServer#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#enabled MysqlServer#enabled}.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#retention_days MysqlServer#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_account_access_key MysqlServer#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#storage_endpoint MysqlServer#storage_endpoint}.

---

### MysqlServerTimeouts <a name="MysqlServerTimeouts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create MysqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#delete MysqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#read MysqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#update MysqlServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#create MysqlServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#delete MysqlServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#read MysqlServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/mysql_server#update MysqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlServerIdentityOutputReference <a name="MysqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MysqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerIdentity">MysqlServerIdentity</a>

---


### MysqlServerThreatDetectionPolicyOutputReference <a name="MysqlServerThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerThreatDetectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts">reset_disabled_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">reset_email_account_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled_alerts` <a name="reset_disabled_alerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```python
def reset_disabled_alerts() -> None
```

##### `reset_email_account_admins` <a name="reset_email_account_admins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```python
def reset_email_account_admins() -> None
```

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabled_alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">email_account_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins">email_account_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_alerts_input`<sup>Optional</sup> <a name="disabled_alerts_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```python
disabled_alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_input`<sup>Optional</sup> <a name="email_account_admins_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```python
email_account_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `disabled_alerts`<sup>Required</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins`<sup>Required</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```python
email_account_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerThreatDetectionPolicy">MysqlServerThreatDetectionPolicy</a>

---


### MysqlServerTimeoutsOutputReference <a name="MysqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mysql_server

mysqlServer.MysqlServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mysqlServer.MysqlServerTimeouts">MysqlServerTimeouts</a>]

---



