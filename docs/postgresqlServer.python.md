# `postgresqlServer` Submodule <a name="`postgresqlServer` Submodule" id="@cdktf/provider-azurerm.postgresqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlServer <a name="PostgresqlServer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server azurerm_postgresql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServer(
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
  identity: PostgresqlServerIdentity = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore_point_in_time: str = None,
  ssl_minimal_tls_version_enforced: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threat_detection_policy: PostgresqlServerThreatDetectionPolicy = None,
  timeouts: PostgresqlServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#location PostgresqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#name PostgresqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#version PostgresqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#id PostgresqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#location PostgresqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#name PostgresqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}.

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.sslEnforcementEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#version PostgresqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}.

---

##### `auto_grow_enabled`<sup>Optional</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.autoGrowEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}.

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.backupRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.createMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}.

---

##### `creation_source_server_id`<sup>Optional</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.creationSourceServerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.geoRedundantBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#id PostgresqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#identity PostgresqlServer#identity}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}.

---

##### `restore_point_in_time`<sup>Optional</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.restorePointInTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}.

---

##### `ssl_minimal_tls_version_enforced`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.sslMinimalTlsVersionEnforced"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.storageMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}.

---

##### `threat_detection_policy`<sup>Optional</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.threatDetectionPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#threat_detection_policy PostgresqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#timeouts PostgresqlServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy">put_threat_detection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLogin">reset_administrator_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLoginPassword">reset_administrator_login_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAutoGrowEnabled">reset_auto_grow_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetBackupRetentionDays">reset_backup_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreateMode">reset_create_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreationSourceServerId">reset_creation_source_server_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetGeoRedundantBackupEnabled">reset_geo_redundant_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetRestorePointInTime">reset_restore_point_in_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetSslMinimalTlsVersionEnforced">reset_ssl_minimal_tls_version_enforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetStorageMb">reset_storage_mb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetThreatDetectionPolicy">reset_threat_detection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity"></a>

```python
def put_identity(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#type PostgresqlServer#type}.

---

##### `put_threat_detection_policy` <a name="put_threat_detection_policy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy"></a>

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

###### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.disabledAlerts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#disabled_alerts PostgresqlServer#disabled_alerts}.

---

###### `email_account_admins`<sup>Optional</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.emailAccountAdmins"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_account_admins PostgresqlServer#email_account_admins}.

---

###### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.emailAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_addresses PostgresqlServer#email_addresses}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#enabled PostgresqlServer#enabled}.

---

###### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#retention_days PostgresqlServer#retention_days}.

---

###### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_account_access_key PostgresqlServer#storage_account_access_key}.

---

###### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putThreatDetectionPolicy.parameter.storageEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_endpoint PostgresqlServer#storage_endpoint}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create PostgresqlServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#delete PostgresqlServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#read PostgresqlServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#update PostgresqlServer#update}.

---

##### `reset_administrator_login` <a name="reset_administrator_login" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLogin"></a>

```python
def reset_administrator_login() -> None
```

##### `reset_administrator_login_password` <a name="reset_administrator_login_password" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAdministratorLoginPassword"></a>

```python
def reset_administrator_login_password() -> None
```

##### `reset_auto_grow_enabled` <a name="reset_auto_grow_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetAutoGrowEnabled"></a>

```python
def reset_auto_grow_enabled() -> None
```

##### `reset_backup_retention_days` <a name="reset_backup_retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetBackupRetentionDays"></a>

```python
def reset_backup_retention_days() -> None
```

##### `reset_create_mode` <a name="reset_create_mode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreateMode"></a>

```python
def reset_create_mode() -> None
```

##### `reset_creation_source_server_id` <a name="reset_creation_source_server_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetCreationSourceServerId"></a>

```python
def reset_creation_source_server_id() -> None
```

##### `reset_geo_redundant_backup_enabled` <a name="reset_geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetGeoRedundantBackupEnabled"></a>

```python
def reset_geo_redundant_backup_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_restore_point_in_time` <a name="reset_restore_point_in_time" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetRestorePointInTime"></a>

```python
def reset_restore_point_in_time() -> None
```

##### `reset_ssl_minimal_tls_version_enforced` <a name="reset_ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetSslMinimalTlsVersionEnforced"></a>

```python
def reset_ssl_minimal_tls_version_enforced() -> None
```

##### `reset_storage_mb` <a name="reset_storage_mb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetStorageMb"></a>

```python
def reset_storage_mb() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_threat_detection_policy` <a name="reset_threat_detection_policy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetThreatDetectionPolicy"></a>

```python
def reset_threat_detection_policy() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PostgresqlServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PostgresqlServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PostgresqlServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PostgresqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference">PostgresqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference">PostgresqlServerThreatDetectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference">PostgresqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPasswordInput">administrator_login_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabledInput">auto_grow_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDaysInput">backup_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createModeInput">create_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerIdInput">creation_source_server_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabledInput">geo_redundant_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTimeInput">restore_point_in_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabledInput">ssl_enforcement_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforcedInput">ssl_minimal_tls_version_enforced_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMbInput">storage_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicyInput">threat_detection_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createMode">create_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identity"></a>

```python
identity: PostgresqlServerIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference">PostgresqlServerIdentityOutputReference</a>

---

##### `threat_detection_policy`<sup>Required</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicy"></a>

```python
threat_detection_policy: PostgresqlServerThreatDetectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference">PostgresqlServerThreatDetectionPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeouts"></a>

```python
timeouts: PostgresqlServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference">PostgresqlServerTimeoutsOutputReference</a>

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_login_password_input`<sup>Optional</sup> <a name="administrator_login_password_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPasswordInput"></a>

```python
administrator_login_password_input: str
```

- *Type:* str

---

##### `auto_grow_enabled_input`<sup>Optional</sup> <a name="auto_grow_enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabledInput"></a>

```python
auto_grow_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_retention_days_input`<sup>Optional</sup> <a name="backup_retention_days_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDaysInput"></a>

```python
backup_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode_input`<sup>Optional</sup> <a name="create_mode_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createModeInput"></a>

```python
create_mode_input: str
```

- *Type:* str

---

##### `creation_source_server_id_input`<sup>Optional</sup> <a name="creation_source_server_id_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerIdInput"></a>

```python
creation_source_server_id_input: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled_input`<sup>Optional</sup> <a name="geo_redundant_backup_enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabledInput"></a>

```python
geo_redundant_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.identityInput"></a>

```python
identity_input: PostgresqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `restore_point_in_time_input`<sup>Optional</sup> <a name="restore_point_in_time_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTimeInput"></a>

```python
restore_point_in_time_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `ssl_enforcement_enabled_input`<sup>Optional</sup> <a name="ssl_enforcement_enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabledInput"></a>

```python
ssl_enforcement_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_minimal_tls_version_enforced_input`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforcedInput"></a>

```python
ssl_minimal_tls_version_enforced_input: str
```

- *Type:* str

---

##### `storage_mb_input`<sup>Optional</sup> <a name="storage_mb_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMbInput"></a>

```python
storage_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `threat_detection_policy_input`<sup>Optional</sup> <a name="threat_detection_policy_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.threatDetectionPolicyInput"></a>

```python
threat_detection_policy_input: PostgresqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PostgresqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_login_password`<sup>Required</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

---

##### `auto_grow_enabled`<sup>Required</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.autoGrowEnabled"></a>

```python
auto_grow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_retention_days`<sup>Required</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_mode`<sup>Required</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

---

##### `creation_source_server_id`<sup>Required</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.creationSourceServerId"></a>

```python
creation_source_server_id: str
```

- *Type:* str

---

##### `geo_redundant_backup_enabled`<sup>Required</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `restore_point_in_time`<sup>Required</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslEnforcementEnabled"></a>

```python
ssl_enforcement_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssl_minimal_tls_version_enforced`<sup>Required</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.sslMinimalTlsVersionEnforced"></a>

```python
ssl_minimal_tls_version_enforced: str
```

- *Type:* str

---

##### `storage_mb`<sup>Required</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlServerConfig <a name="PostgresqlServerConfig" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerConfig(
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
  identity: PostgresqlServerIdentity = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore_point_in_time: str = None,
  ssl_minimal_tls_version_enforced: str = None,
  storage_mb: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None,
  threat_detection_policy: PostgresqlServerThreatDetectionPolicy = None,
  timeouts: PostgresqlServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#location PostgresqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#name PostgresqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslEnforcementEnabled">ssl_enforcement_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#version PostgresqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.autoGrowEnabled">auto_grow_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.backupRetentionDays">backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.creationSourceServerId">creation_source_server_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.geoRedundantBackupEnabled">geo_redundant_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#id PostgresqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.restorePointInTime">restore_point_in_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslMinimalTlsVersionEnforced">ssl_minimal_tls_version_enforced</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.storageMb">storage_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.threatDetectionPolicy">threat_detection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | threat_detection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#location PostgresqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#name PostgresqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#resource_group_name PostgresqlServer#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#sku_name PostgresqlServer#sku_name}.

---

##### `ssl_enforcement_enabled`<sup>Required</sup> <a name="ssl_enforcement_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslEnforcementEnabled"></a>

```python
ssl_enforcement_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_enforcement_enabled PostgresqlServer#ssl_enforcement_enabled}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#version PostgresqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login PostgresqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#administrator_login_password PostgresqlServer#administrator_login_password}.

---

##### `auto_grow_enabled`<sup>Optional</sup> <a name="auto_grow_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.autoGrowEnabled"></a>

```python
auto_grow_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#auto_grow_enabled PostgresqlServer#auto_grow_enabled}.

---

##### `backup_retention_days`<sup>Optional</sup> <a name="backup_retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.backupRetentionDays"></a>

```python
backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#backup_retention_days PostgresqlServer#backup_retention_days}.

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create_mode PostgresqlServer#create_mode}.

---

##### `creation_source_server_id`<sup>Optional</sup> <a name="creation_source_server_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.creationSourceServerId"></a>

```python
creation_source_server_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#creation_source_server_id PostgresqlServer#creation_source_server_id}.

---

##### `geo_redundant_backup_enabled`<sup>Optional</sup> <a name="geo_redundant_backup_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.geoRedundantBackupEnabled"></a>

```python
geo_redundant_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#geo_redundant_backup_enabled PostgresqlServer#geo_redundant_backup_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#id PostgresqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.identity"></a>

```python
identity: PostgresqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#identity PostgresqlServer#identity}

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#infrastructure_encryption_enabled PostgresqlServer#infrastructure_encryption_enabled}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#public_network_access_enabled PostgresqlServer#public_network_access_enabled}.

---

##### `restore_point_in_time`<sup>Optional</sup> <a name="restore_point_in_time" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.restorePointInTime"></a>

```python
restore_point_in_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#restore_point_in_time PostgresqlServer#restore_point_in_time}.

---

##### `ssl_minimal_tls_version_enforced`<sup>Optional</sup> <a name="ssl_minimal_tls_version_enforced" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.sslMinimalTlsVersionEnforced"></a>

```python
ssl_minimal_tls_version_enforced: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#ssl_minimal_tls_version_enforced PostgresqlServer#ssl_minimal_tls_version_enforced}.

---

##### `storage_mb`<sup>Optional</sup> <a name="storage_mb" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.storageMb"></a>

```python
storage_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_mb PostgresqlServer#storage_mb}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#tags PostgresqlServer#tags}.

---

##### `threat_detection_policy`<sup>Optional</sup> <a name="threat_detection_policy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.threatDetectionPolicy"></a>

```python
threat_detection_policy: PostgresqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

threat_detection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#threat_detection_policy PostgresqlServer#threat_detection_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerConfig.property.timeouts"></a>

```python
timeouts: PostgresqlServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#timeouts PostgresqlServer#timeouts}

---

### PostgresqlServerIdentity <a name="PostgresqlServerIdentity" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerIdentity(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#type PostgresqlServer#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#type PostgresqlServer#type}.

---

### PostgresqlServerThreatDetectionPolicy <a name="PostgresqlServerThreatDetectionPolicy" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerThreatDetectionPolicy(
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
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#disabled_alerts PostgresqlServer#disabled_alerts}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAccountAdmins">email_account_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_account_admins PostgresqlServer#email_account_admins}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_addresses PostgresqlServer#email_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#enabled PostgresqlServer#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#retention_days PostgresqlServer#retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_account_access_key PostgresqlServer#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_endpoint PostgresqlServer#storage_endpoint}. |

---

##### `disabled_alerts`<sup>Optional</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#disabled_alerts PostgresqlServer#disabled_alerts}.

---

##### `email_account_admins`<sup>Optional</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAccountAdmins"></a>

```python
email_account_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_account_admins PostgresqlServer#email_account_admins}.

---

##### `email_addresses`<sup>Optional</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#email_addresses PostgresqlServer#email_addresses}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#enabled PostgresqlServer#enabled}.

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#retention_days PostgresqlServer#retention_days}.

---

##### `storage_account_access_key`<sup>Optional</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_account_access_key PostgresqlServer#storage_account_access_key}.

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#storage_endpoint PostgresqlServer#storage_endpoint}.

---

### PostgresqlServerTimeouts <a name="PostgresqlServerTimeouts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create PostgresqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#delete PostgresqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#read PostgresqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#update PostgresqlServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#create PostgresqlServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#delete PostgresqlServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#read PostgresqlServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.88.0/docs/resources/postgresql_server#update PostgresqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlServerIdentityOutputReference <a name="PostgresqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentityOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerIdentity">PostgresqlServerIdentity</a>

---


### PostgresqlServerThreatDetectionPolicyOutputReference <a name="PostgresqlServerThreatDetectionPolicyOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts">reset_disabled_alerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins">reset_email_account_admins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses">reset_email_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetRetentionDays">reset_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey">reset_storage_account_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled_alerts` <a name="reset_disabled_alerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetDisabledAlerts"></a>

```python
def reset_disabled_alerts() -> None
```

##### `reset_email_account_admins` <a name="reset_email_account_admins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAccountAdmins"></a>

```python
def reset_email_account_admins() -> None
```

##### `reset_email_addresses` <a name="reset_email_addresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEmailAddresses"></a>

```python
def reset_email_addresses() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

##### `reset_storage_account_access_key` <a name="reset_storage_account_access_key" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageAccountAccessKey"></a>

```python
def reset_storage_account_access_key() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput">disabled_alerts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput">email_account_admins_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput">email_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts">disabled_alerts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins">email_account_admins</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddresses">email_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_alerts_input`<sup>Optional</sup> <a name="disabled_alerts_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlertsInput"></a>

```python
disabled_alerts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins_input`<sup>Optional</sup> <a name="email_account_admins_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdminsInput"></a>

```python
email_account_admins_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses_input`<sup>Optional</sup> <a name="email_addresses_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddressesInput"></a>

```python
email_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `disabled_alerts`<sup>Required</sup> <a name="disabled_alerts" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.disabledAlerts"></a>

```python
disabled_alerts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `email_account_admins`<sup>Required</sup> <a name="email_account_admins" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAccountAdmins"></a>

```python
email_account_admins: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_addresses`<sup>Required</sup> <a name="email_addresses" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.emailAddresses"></a>

```python
email_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Required</sup> <a name="storage_endpoint" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: PostgresqlServerThreatDetectionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerThreatDetectionPolicy">PostgresqlServerThreatDetectionPolicy</a>

---


### PostgresqlServerTimeoutsOutputReference <a name="PostgresqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import postgresql_server

postgresqlServer.PostgresqlServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PostgresqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.postgresqlServer.PostgresqlServerTimeouts">PostgresqlServerTimeouts</a>]

---



