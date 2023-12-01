# `cosmosdbAccount` Submodule <a name="`cosmosdbAccount` Submodule" id="@cdktf/provider-azurerm.cosmosdbAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbAccount <a name="CosmosdbAccount" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account azurerm_cosmosdb_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consistency_policy: CosmosdbAccountConsistencyPolicy,
  geo_location: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]],
  location: str,
  name: str,
  offer_type: str,
  resource_group_name: str,
  access_key_metadata_writes_enabled: typing.Union[bool, IResolvable] = None,
  analytical_storage: CosmosdbAccountAnalyticalStorage = None,
  analytical_storage_enabled: typing.Union[bool, IResolvable] = None,
  backup: CosmosdbAccountBackup = None,
  capabilities: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]] = None,
  capacity: CosmosdbAccountCapacity = None,
  cors_rule: CosmosdbAccountCorsRule = None,
  create_mode: str = None,
  default_identity_type: str = None,
  enable_automatic_failover: typing.Union[bool, IResolvable] = None,
  enable_free_tier: typing.Union[bool, IResolvable] = None,
  enable_multiple_write_locations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: CosmosdbAccountIdentity = None,
  ip_range_filter: str = None,
  is_virtual_network_filter_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  kind: str = None,
  local_authentication_disabled: typing.Union[bool, IResolvable] = None,
  mongo_server_version: str = None,
  network_acl_bypass_for_azure_services: typing.Union[bool, IResolvable] = None,
  network_acl_bypass_ids: typing.List[str] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore: CosmosdbAccountRestore = None,
  tags: typing.Mapping[str] = None,
  timeouts: CosmosdbAccountTimeouts = None,
  virtual_network_rule: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.consistencyPolicy">consistency_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | consistency_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.geoLocation">geo_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]</code> | geo_location block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.offerType">offer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.accessKeyMetadataWritesEnabled">access_key_metadata_writes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.analyticalStorage">analytical_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | analytical_storage block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.analyticalStorageEnabled">analytical_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]</code> | capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.defaultIdentityType">default_identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableAutomaticFailover">enable_automatic_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableFreeTier">enable_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableMultipleWriteLocations">enable_multiple_write_locations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.ipRangeFilter">ip_range_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.isVirtualNetworkFilterEnabled">is_virtual_network_filter_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.mongoServerVersion">mongo_server_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.networkAclBypassForAzureServices">network_acl_bypass_for_azure_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.networkAclBypassIds">network_acl_bypass_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.virtualNetworkRule">virtual_network_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]</code> | virtual_network_rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consistency_policy`<sup>Required</sup> <a name="consistency_policy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.consistencyPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

consistency_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}

---

##### `geo_location`<sup>Required</sup> <a name="geo_location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.geoLocation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]

geo_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#geo_location CosmosdbAccount#geo_location}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `offer_type`<sup>Required</sup> <a name="offer_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.offerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}.

---

##### `access_key_metadata_writes_enabled`<sup>Optional</sup> <a name="access_key_metadata_writes_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.accessKeyMetadataWritesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}.

---

##### `analytical_storage`<sup>Optional</sup> <a name="analytical_storage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.analyticalStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

analytical_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}

---

##### `analytical_storage_enabled`<sup>Optional</sup> <a name="analytical_storage_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.analyticalStorageEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}.

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#backup CosmosdbAccount#backup}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.capabilities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#capabilities CosmosdbAccount#capabilities}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.capacity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#capacity CosmosdbAccount#capacity}

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.corsRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.createMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}.

---

##### `default_identity_type`<sup>Optional</sup> <a name="default_identity_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.defaultIdentityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}.

---

##### `enable_automatic_failover`<sup>Optional</sup> <a name="enable_automatic_failover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableAutomaticFailover"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}.

---

##### `enable_free_tier`<sup>Optional</sup> <a name="enable_free_tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableFreeTier"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}.

---

##### `enable_multiple_write_locations`<sup>Optional</sup> <a name="enable_multiple_write_locations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.enableMultipleWriteLocations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#identity CosmosdbAccount#identity}

---

##### `ip_range_filter`<sup>Optional</sup> <a name="ip_range_filter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.ipRangeFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}.

---

##### `is_virtual_network_filter_enabled`<sup>Optional</sup> <a name="is_virtual_network_filter_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.isVirtualNetworkFilterEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.keyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}.

---

##### `local_authentication_disabled`<sup>Optional</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.localAuthenticationDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}.

---

##### `mongo_server_version`<sup>Optional</sup> <a name="mongo_server_version" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.mongoServerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}.

---

##### `network_acl_bypass_for_azure_services`<sup>Optional</sup> <a name="network_acl_bypass_for_azure_services" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.networkAclBypassForAzureServices"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}.

---

##### `network_acl_bypass_ids`<sup>Optional</sup> <a name="network_acl_bypass_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.networkAclBypassIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.restore"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#restore CosmosdbAccount#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#timeouts CosmosdbAccount#timeouts}

---

##### `virtual_network_rule`<sup>Optional</sup> <a name="virtual_network_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.Initializer.parameter.virtualNetworkRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]

virtual_network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage">put_analytical_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities">put_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity">put_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy">put_consistency_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation">put_geo_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore">put_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule">put_virtual_network_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled">reset_access_key_metadata_writes_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage">reset_analytical_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled">reset_analytical_storage_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup">reset_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity">reset_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode">reset_create_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType">reset_default_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableAutomaticFailover">reset_enable_automatic_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableFreeTier">reset_enable_free_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableMultipleWriteLocations">reset_enable_multiple_write_locations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter">reset_ip_range_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled">reset_is_virtual_network_filter_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId">reset_key_vault_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled">reset_local_authentication_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion">reset_mongo_server_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices">reset_network_acl_bypass_for_azure_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds">reset_network_acl_bypass_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore">reset_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule">reset_virtual_network_rule</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_analytical_storage` <a name="put_analytical_storage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage"></a>

```python
def put_analytical_storage(
  schema_type: str
) -> None
```

###### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putAnalyticalStorage.parameter.schemaType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}.

---

##### `put_backup` <a name="put_backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup"></a>

```python
def put_backup(
  type: str,
  interval_in_minutes: typing.Union[int, float] = None,
  retention_in_hours: typing.Union[int, float] = None,
  storage_redundancy: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

###### `interval_in_minutes`<sup>Optional</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.intervalInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}.

---

###### `retention_in_hours`<sup>Optional</sup> <a name="retention_in_hours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.retentionInHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}.

---

###### `storage_redundancy`<sup>Optional</sup> <a name="storage_redundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putBackup.parameter.storageRedundancy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}.

---

##### `put_capabilities` <a name="put_capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities"></a>

```python
def put_capabilities(
  value: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapabilities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]

---

##### `put_capacity` <a name="put_capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity"></a>

```python
def put_capacity(
  total_throughput_limit: typing.Union[int, float]
) -> None
```

###### `total_throughput_limit`<sup>Required</sup> <a name="total_throughput_limit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCapacity.parameter.totalThroughputLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}.

---

##### `put_consistency_policy` <a name="put_consistency_policy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy"></a>

```python
def put_consistency_policy(
  consistency_level: str,
  max_interval_in_seconds: typing.Union[int, float] = None,
  max_staleness_prefix: typing.Union[int, float] = None
) -> None
```

###### `consistency_level`<sup>Required</sup> <a name="consistency_level" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.consistencyLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}.

---

###### `max_interval_in_seconds`<sup>Optional</sup> <a name="max_interval_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.maxIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}.

---

###### `max_staleness_prefix`<sup>Optional</sup> <a name="max_staleness_prefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putConsistencyPolicy.parameter.maxStalenessPrefix"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}.

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule"></a>

```python
def put_cors_rule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.allowedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}.

---

###### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.allowedMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}.

---

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}.

---

###### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.exposedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}.

---

###### `max_age_in_seconds`<sup>Optional</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putCorsRule.parameter.maxAgeInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}.

---

##### `put_geo_location` <a name="put_geo_location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation"></a>

```python
def put_geo_location(
  value: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putGeoLocation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}.

---

##### `put_restore` <a name="put_restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore"></a>

```python
def put_restore(
  restore_timestamp_in_utc: str,
  source_cosmosdb_account_id: str,
  database: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]] = None
) -> None
```

###### `restore_timestamp_in_utc`<sup>Required</sup> <a name="restore_timestamp_in_utc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.restoreTimestampInUtc"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}.

---

###### `source_cosmosdb_account_id`<sup>Required</sup> <a name="source_cosmosdb_account_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.sourceCosmosdbAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}.

---

###### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putRestore.parameter.database"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#database CosmosdbAccount#database}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}.

---

##### `put_virtual_network_rule` <a name="put_virtual_network_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule"></a>

```python
def put_virtual_network_rule(
  value: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.putVirtualNetworkRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]

---

##### `reset_access_key_metadata_writes_enabled` <a name="reset_access_key_metadata_writes_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAccessKeyMetadataWritesEnabled"></a>

```python
def reset_access_key_metadata_writes_enabled() -> None
```

##### `reset_analytical_storage` <a name="reset_analytical_storage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorage"></a>

```python
def reset_analytical_storage() -> None
```

##### `reset_analytical_storage_enabled` <a name="reset_analytical_storage_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetAnalyticalStorageEnabled"></a>

```python
def reset_analytical_storage_enabled() -> None
```

##### `reset_backup` <a name="reset_backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetBackup"></a>

```python
def reset_backup() -> None
```

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_capacity` <a name="reset_capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCapacity"></a>

```python
def reset_capacity() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_create_mode` <a name="reset_create_mode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetCreateMode"></a>

```python
def reset_create_mode() -> None
```

##### `reset_default_identity_type` <a name="reset_default_identity_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetDefaultIdentityType"></a>

```python
def reset_default_identity_type() -> None
```

##### `reset_enable_automatic_failover` <a name="reset_enable_automatic_failover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableAutomaticFailover"></a>

```python
def reset_enable_automatic_failover() -> None
```

##### `reset_enable_free_tier` <a name="reset_enable_free_tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableFreeTier"></a>

```python
def reset_enable_free_tier() -> None
```

##### `reset_enable_multiple_write_locations` <a name="reset_enable_multiple_write_locations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetEnableMultipleWriteLocations"></a>

```python
def reset_enable_multiple_write_locations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_ip_range_filter` <a name="reset_ip_range_filter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIpRangeFilter"></a>

```python
def reset_ip_range_filter() -> None
```

##### `reset_is_virtual_network_filter_enabled` <a name="reset_is_virtual_network_filter_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetIsVirtualNetworkFilterEnabled"></a>

```python
def reset_is_virtual_network_filter_enabled() -> None
```

##### `reset_key_vault_key_id` <a name="reset_key_vault_key_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKeyVaultKeyId"></a>

```python
def reset_key_vault_key_id() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_local_authentication_disabled` <a name="reset_local_authentication_disabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetLocalAuthenticationDisabled"></a>

```python
def reset_local_authentication_disabled() -> None
```

##### `reset_mongo_server_version` <a name="reset_mongo_server_version" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetMongoServerVersion"></a>

```python
def reset_mongo_server_version() -> None
```

##### `reset_network_acl_bypass_for_azure_services` <a name="reset_network_acl_bypass_for_azure_services" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassForAzureServices"></a>

```python
def reset_network_acl_bypass_for_azure_services() -> None
```

##### `reset_network_acl_bypass_ids` <a name="reset_network_acl_bypass_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetNetworkAclBypassIds"></a>

```python
def reset_network_acl_bypass_ids() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_restore` <a name="reset_restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetRestore"></a>

```python
def reset_restore() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_rule` <a name="reset_virtual_network_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.resetVirtualNetworkRule"></a>

```python
def reset_virtual_network_rule() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage">analytical_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities">capabilities</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connectionStrings">connection_strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy">consistency_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation">geo_location</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString">primary_mongodb_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey">primary_readonly_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString">primary_readonly_mongodb_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString">primary_readonly_sql_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString">primary_sql_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints">read_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString">secondary_mongodb_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey">secondary_readonly_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString">secondary_readonly_mongodb_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString">secondary_readonly_sql_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString">secondary_sql_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule">virtual_network_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints">write_endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput">access_key_metadata_writes_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput">analytical_storage_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput">analytical_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput">capacity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput">consistency_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput">cors_rule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput">create_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput">default_identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailoverInput">enable_automatic_failover_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTierInput">enable_free_tier_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocationsInput">enable_multiple_write_locations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput">geo_location_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput">ip_range_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput">is_virtual_network_filter_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput">key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput">local_authentication_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput">mongo_server_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput">network_acl_bypass_for_azure_services_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput">network_acl_bypass_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput">offer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput">restore_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput">virtual_network_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled">access_key_metadata_writes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled">analytical_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode">create_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType">default_identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailover">enable_automatic_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTier">enable_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocations">enable_multiple_write_locations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter">ip_range_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled">is_virtual_network_filter_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion">mongo_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices">network_acl_bypass_for_azure_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds">network_acl_bypass_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType">offer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `analytical_storage`<sup>Required</sup> <a name="analytical_storage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorage"></a>

```python
analytical_storage: CosmosdbAccountAnalyticalStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference">CosmosdbAccountAnalyticalStorageOutputReference</a>

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backup"></a>

```python
backup: CosmosdbAccountBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference">CosmosdbAccountBackupOutputReference</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilities"></a>

```python
capabilities: CosmosdbAccountCapabilitiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList">CosmosdbAccountCapabilitiesList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacity"></a>

```python
capacity: CosmosdbAccountCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference">CosmosdbAccountCapacityOutputReference</a>

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.connectionStrings"></a>

```python
connection_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consistency_policy`<sup>Required</sup> <a name="consistency_policy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicy"></a>

```python
consistency_policy: CosmosdbAccountConsistencyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference">CosmosdbAccountConsistencyPolicyOutputReference</a>

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRule"></a>

```python
cors_rule: CosmosdbAccountCorsRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference">CosmosdbAccountCorsRuleOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `geo_location`<sup>Required</sup> <a name="geo_location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocation"></a>

```python
geo_location: CosmosdbAccountGeoLocationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList">CosmosdbAccountGeoLocationList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identity"></a>

```python
identity: CosmosdbAccountIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference">CosmosdbAccountIdentityOutputReference</a>

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `primary_mongodb_connection_string`<sup>Required</sup> <a name="primary_mongodb_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryMongodbConnectionString"></a>

```python
primary_mongodb_connection_string: str
```

- *Type:* str

---

##### `primary_readonly_key`<sup>Required</sup> <a name="primary_readonly_key" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyKey"></a>

```python
primary_readonly_key: str
```

- *Type:* str

---

##### `primary_readonly_mongodb_connection_string`<sup>Required</sup> <a name="primary_readonly_mongodb_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlyMongodbConnectionString"></a>

```python
primary_readonly_mongodb_connection_string: str
```

- *Type:* str

---

##### `primary_readonly_sql_connection_string`<sup>Required</sup> <a name="primary_readonly_sql_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primaryReadonlySqlConnectionString"></a>

```python
primary_readonly_sql_connection_string: str
```

- *Type:* str

---

##### `primary_sql_connection_string`<sup>Required</sup> <a name="primary_sql_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.primarySqlConnectionString"></a>

```python
primary_sql_connection_string: str
```

- *Type:* str

---

##### `read_endpoints`<sup>Required</sup> <a name="read_endpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.readEndpoints"></a>

```python
read_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restore`<sup>Required</sup> <a name="restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restore"></a>

```python
restore: CosmosdbAccountRestoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference">CosmosdbAccountRestoreOutputReference</a>

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `secondary_mongodb_connection_string`<sup>Required</sup> <a name="secondary_mongodb_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryMongodbConnectionString"></a>

```python
secondary_mongodb_connection_string: str
```

- *Type:* str

---

##### `secondary_readonly_key`<sup>Required</sup> <a name="secondary_readonly_key" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyKey"></a>

```python
secondary_readonly_key: str
```

- *Type:* str

---

##### `secondary_readonly_mongodb_connection_string`<sup>Required</sup> <a name="secondary_readonly_mongodb_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlyMongodbConnectionString"></a>

```python
secondary_readonly_mongodb_connection_string: str
```

- *Type:* str

---

##### `secondary_readonly_sql_connection_string`<sup>Required</sup> <a name="secondary_readonly_sql_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondaryReadonlySqlConnectionString"></a>

```python
secondary_readonly_sql_connection_string: str
```

- *Type:* str

---

##### `secondary_sql_connection_string`<sup>Required</sup> <a name="secondary_sql_connection_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.secondarySqlConnectionString"></a>

```python
secondary_sql_connection_string: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeouts"></a>

```python
timeouts: CosmosdbAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference">CosmosdbAccountTimeoutsOutputReference</a>

---

##### `virtual_network_rule`<sup>Required</sup> <a name="virtual_network_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRule"></a>

```python
virtual_network_rule: CosmosdbAccountVirtualNetworkRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList">CosmosdbAccountVirtualNetworkRuleList</a>

---

##### `write_endpoints`<sup>Required</sup> <a name="write_endpoints" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.writeEndpoints"></a>

```python
write_endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_key_metadata_writes_enabled_input`<sup>Optional</sup> <a name="access_key_metadata_writes_enabled_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabledInput"></a>

```python
access_key_metadata_writes_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analytical_storage_enabled_input`<sup>Optional</sup> <a name="analytical_storage_enabled_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabledInput"></a>

```python
analytical_storage_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analytical_storage_input`<sup>Optional</sup> <a name="analytical_storage_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageInput"></a>

```python
analytical_storage_input: CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.backupInput"></a>

```python
backup_input: CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capabilitiesInput"></a>

```python
capabilities_input: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.capacityInput"></a>

```python
capacity_input: CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---

##### `consistency_policy_input`<sup>Optional</sup> <a name="consistency_policy_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.consistencyPolicyInput"></a>

```python
consistency_policy_input: CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.corsRuleInput"></a>

```python
cors_rule_input: CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---

##### `create_mode_input`<sup>Optional</sup> <a name="create_mode_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createModeInput"></a>

```python
create_mode_input: str
```

- *Type:* str

---

##### `default_identity_type_input`<sup>Optional</sup> <a name="default_identity_type_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityTypeInput"></a>

```python
default_identity_type_input: str
```

- *Type:* str

---

##### `enable_automatic_failover_input`<sup>Optional</sup> <a name="enable_automatic_failover_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailoverInput"></a>

```python
enable_automatic_failover_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_free_tier_input`<sup>Optional</sup> <a name="enable_free_tier_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTierInput"></a>

```python
enable_free_tier_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multiple_write_locations_input`<sup>Optional</sup> <a name="enable_multiple_write_locations_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocationsInput"></a>

```python
enable_multiple_write_locations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `geo_location_input`<sup>Optional</sup> <a name="geo_location_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.geoLocationInput"></a>

```python
geo_location_input: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.identityInput"></a>

```python
identity_input: CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_range_filter_input`<sup>Optional</sup> <a name="ip_range_filter_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilterInput"></a>

```python
ip_range_filter_input: str
```

- *Type:* str

---

##### `is_virtual_network_filter_enabled_input`<sup>Optional</sup> <a name="is_virtual_network_filter_enabled_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabledInput"></a>

```python
is_virtual_network_filter_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id_input`<sup>Optional</sup> <a name="key_vault_key_id_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyIdInput"></a>

```python
key_vault_key_id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `local_authentication_disabled_input`<sup>Optional</sup> <a name="local_authentication_disabled_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabledInput"></a>

```python
local_authentication_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `mongo_server_version_input`<sup>Optional</sup> <a name="mongo_server_version_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersionInput"></a>

```python
mongo_server_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_acl_bypass_for_azure_services_input`<sup>Optional</sup> <a name="network_acl_bypass_for_azure_services_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServicesInput"></a>

```python
network_acl_bypass_for_azure_services_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_acl_bypass_ids_input`<sup>Optional</sup> <a name="network_acl_bypass_ids_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIdsInput"></a>

```python
network_acl_bypass_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `offer_type_input`<sup>Optional</sup> <a name="offer_type_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerTypeInput"></a>

```python
offer_type_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `restore_input`<sup>Optional</sup> <a name="restore_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.restoreInput"></a>

```python
restore_input: CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>]

---

##### `virtual_network_rule_input`<sup>Optional</sup> <a name="virtual_network_rule_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.virtualNetworkRuleInput"></a>

```python
virtual_network_rule_input: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]

---

##### `access_key_metadata_writes_enabled`<sup>Required</sup> <a name="access_key_metadata_writes_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.accessKeyMetadataWritesEnabled"></a>

```python
access_key_metadata_writes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `analytical_storage_enabled`<sup>Required</sup> <a name="analytical_storage_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.analyticalStorageEnabled"></a>

```python
analytical_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_mode`<sup>Required</sup> <a name="create_mode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

---

##### `default_identity_type`<sup>Required</sup> <a name="default_identity_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.defaultIdentityType"></a>

```python
default_identity_type: str
```

- *Type:* str

---

##### `enable_automatic_failover`<sup>Required</sup> <a name="enable_automatic_failover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableAutomaticFailover"></a>

```python
enable_automatic_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_free_tier`<sup>Required</sup> <a name="enable_free_tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableFreeTier"></a>

```python
enable_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multiple_write_locations`<sup>Required</sup> <a name="enable_multiple_write_locations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.enableMultipleWriteLocations"></a>

```python
enable_multiple_write_locations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_range_filter`<sup>Required</sup> <a name="ip_range_filter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.ipRangeFilter"></a>

```python
ip_range_filter: str
```

- *Type:* str

---

##### `is_virtual_network_filter_enabled`<sup>Required</sup> <a name="is_virtual_network_filter_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.isVirtualNetworkFilterEnabled"></a>

```python
is_virtual_network_filter_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_id`<sup>Required</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `local_authentication_disabled`<sup>Required</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.localAuthenticationDisabled"></a>

```python
local_authentication_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `mongo_server_version`<sup>Required</sup> <a name="mongo_server_version" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.mongoServerVersion"></a>

```python
mongo_server_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_acl_bypass_for_azure_services`<sup>Required</sup> <a name="network_acl_bypass_for_azure_services" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassForAzureServices"></a>

```python
network_acl_bypass_for_azure_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_acl_bypass_ids`<sup>Required</sup> <a name="network_acl_bypass_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.networkAclBypassIds"></a>

```python
network_acl_bypass_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `offer_type`<sup>Required</sup> <a name="offer_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.offerType"></a>

```python
offer_type: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbAccountAnalyticalStorage <a name="CosmosdbAccountAnalyticalStorage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountAnalyticalStorage(
  schema_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType">schema_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}. |

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#schema_type CosmosdbAccount#schema_type}.

---

### CosmosdbAccountBackup <a name="CosmosdbAccountBackup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountBackup(
  type: str,
  interval_in_minutes: typing.Union[int, float] = None,
  retention_in_hours: typing.Union[int, float] = None,
  storage_redundancy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes">interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours">retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy">storage_redundancy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `interval_in_minutes`<sup>Optional</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.intervalInMinutes"></a>

```python
interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#interval_in_minutes CosmosdbAccount#interval_in_minutes}.

---

##### `retention_in_hours`<sup>Optional</sup> <a name="retention_in_hours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.retentionInHours"></a>

```python
retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#retention_in_hours CosmosdbAccount#retention_in_hours}.

---

##### `storage_redundancy`<sup>Optional</sup> <a name="storage_redundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup.property.storageRedundancy"></a>

```python
storage_redundancy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#storage_redundancy CosmosdbAccount#storage_redundancy}.

---

### CosmosdbAccountCapabilities <a name="CosmosdbAccountCapabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCapabilities(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

### CosmosdbAccountCapacity <a name="CosmosdbAccountCapacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCapacity(
  total_throughput_limit: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit">total_throughput_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}. |

---

##### `total_throughput_limit`<sup>Required</sup> <a name="total_throughput_limit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity.property.totalThroughputLimit"></a>

```python
total_throughput_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#total_throughput_limit CosmosdbAccount#total_throughput_limit}.

---

### CosmosdbAccountConfig <a name="CosmosdbAccountConfig" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  consistency_policy: CosmosdbAccountConsistencyPolicy,
  geo_location: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]],
  location: str,
  name: str,
  offer_type: str,
  resource_group_name: str,
  access_key_metadata_writes_enabled: typing.Union[bool, IResolvable] = None,
  analytical_storage: CosmosdbAccountAnalyticalStorage = None,
  analytical_storage_enabled: typing.Union[bool, IResolvable] = None,
  backup: CosmosdbAccountBackup = None,
  capabilities: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]] = None,
  capacity: CosmosdbAccountCapacity = None,
  cors_rule: CosmosdbAccountCorsRule = None,
  create_mode: str = None,
  default_identity_type: str = None,
  enable_automatic_failover: typing.Union[bool, IResolvable] = None,
  enable_free_tier: typing.Union[bool, IResolvable] = None,
  enable_multiple_write_locations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: CosmosdbAccountIdentity = None,
  ip_range_filter: str = None,
  is_virtual_network_filter_enabled: typing.Union[bool, IResolvable] = None,
  key_vault_key_id: str = None,
  kind: str = None,
  local_authentication_disabled: typing.Union[bool, IResolvable] = None,
  mongo_server_version: str = None,
  network_acl_bypass_for_azure_services: typing.Union[bool, IResolvable] = None,
  network_acl_bypass_ids: typing.List[str] = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  restore: CosmosdbAccountRestore = None,
  tags: typing.Mapping[str] = None,
  timeouts: CosmosdbAccountTimeouts = None,
  virtual_network_rule: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy">consistency_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | consistency_policy block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation">geo_location</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]</code> | geo_location block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType">offer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled">access_key_metadata_writes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage">analytical_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | analytical_storage block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled">analytical_storage_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities">capabilities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]</code> | capabilities block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | capacity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode">create_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType">default_identity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableAutomaticFailover">enable_automatic_failover</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableFreeTier">enable_free_tier</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableMultipleWriteLocations">enable_multiple_write_locations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter">ip_range_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled">is_virtual_network_filter_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId">key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled">local_authentication_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion">mongo_server_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices">network_acl_bypass_for_azure_services</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds">network_acl_bypass_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore">restore</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | restore block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule">virtual_network_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]</code> | virtual_network_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consistency_policy`<sup>Required</sup> <a name="consistency_policy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.consistencyPolicy"></a>

```python
consistency_policy: CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

consistency_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#consistency_policy CosmosdbAccount#consistency_policy}

---

##### `geo_location`<sup>Required</sup> <a name="geo_location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.geoLocation"></a>

```python
geo_location: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]

geo_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#geo_location CosmosdbAccount#geo_location}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `offer_type`<sup>Required</sup> <a name="offer_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.offerType"></a>

```python
offer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#offer_type CosmosdbAccount#offer_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#resource_group_name CosmosdbAccount#resource_group_name}.

---

##### `access_key_metadata_writes_enabled`<sup>Optional</sup> <a name="access_key_metadata_writes_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.accessKeyMetadataWritesEnabled"></a>

```python
access_key_metadata_writes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#access_key_metadata_writes_enabled CosmosdbAccount#access_key_metadata_writes_enabled}.

---

##### `analytical_storage`<sup>Optional</sup> <a name="analytical_storage" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorage"></a>

```python
analytical_storage: CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

analytical_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage CosmosdbAccount#analytical_storage}

---

##### `analytical_storage_enabled`<sup>Optional</sup> <a name="analytical_storage_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.analyticalStorageEnabled"></a>

```python
analytical_storage_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#analytical_storage_enabled CosmosdbAccount#analytical_storage_enabled}.

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.backup"></a>

```python
backup: CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#backup CosmosdbAccount#backup}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capabilities"></a>

```python
capabilities: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]

capabilities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#capabilities CosmosdbAccount#capabilities}

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.capacity"></a>

```python
capacity: CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#capacity CosmosdbAccount#capacity}

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.corsRule"></a>

```python
cors_rule: CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#cors_rule CosmosdbAccount#cors_rule}

---

##### `create_mode`<sup>Optional</sup> <a name="create_mode" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.createMode"></a>

```python
create_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create_mode CosmosdbAccount#create_mode}.

---

##### `default_identity_type`<sup>Optional</sup> <a name="default_identity_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.defaultIdentityType"></a>

```python
default_identity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#default_identity_type CosmosdbAccount#default_identity_type}.

---

##### `enable_automatic_failover`<sup>Optional</sup> <a name="enable_automatic_failover" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableAutomaticFailover"></a>

```python
enable_automatic_failover: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_automatic_failover CosmosdbAccount#enable_automatic_failover}.

---

##### `enable_free_tier`<sup>Optional</sup> <a name="enable_free_tier" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableFreeTier"></a>

```python
enable_free_tier: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_free_tier CosmosdbAccount#enable_free_tier}.

---

##### `enable_multiple_write_locations`<sup>Optional</sup> <a name="enable_multiple_write_locations" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.enableMultipleWriteLocations"></a>

```python
enable_multiple_write_locations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#enable_multiple_write_locations CosmosdbAccount#enable_multiple_write_locations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.identity"></a>

```python
identity: CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#identity CosmosdbAccount#identity}

---

##### `ip_range_filter`<sup>Optional</sup> <a name="ip_range_filter" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.ipRangeFilter"></a>

```python
ip_range_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ip_range_filter CosmosdbAccount#ip_range_filter}.

---

##### `is_virtual_network_filter_enabled`<sup>Optional</sup> <a name="is_virtual_network_filter_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.isVirtualNetworkFilterEnabled"></a>

```python
is_virtual_network_filter_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#is_virtual_network_filter_enabled CosmosdbAccount#is_virtual_network_filter_enabled}.

---

##### `key_vault_key_id`<sup>Optional</sup> <a name="key_vault_key_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.keyVaultKeyId"></a>

```python
key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#key_vault_key_id CosmosdbAccount#key_vault_key_id}.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#kind CosmosdbAccount#kind}.

---

##### `local_authentication_disabled`<sup>Optional</sup> <a name="local_authentication_disabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.localAuthenticationDisabled"></a>

```python
local_authentication_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#local_authentication_disabled CosmosdbAccount#local_authentication_disabled}.

---

##### `mongo_server_version`<sup>Optional</sup> <a name="mongo_server_version" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.mongoServerVersion"></a>

```python
mongo_server_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#mongo_server_version CosmosdbAccount#mongo_server_version}.

---

##### `network_acl_bypass_for_azure_services`<sup>Optional</sup> <a name="network_acl_bypass_for_azure_services" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassForAzureServices"></a>

```python
network_acl_bypass_for_azure_services: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_for_azure_services CosmosdbAccount#network_acl_bypass_for_azure_services}.

---

##### `network_acl_bypass_ids`<sup>Optional</sup> <a name="network_acl_bypass_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.networkAclBypassIds"></a>

```python
network_acl_bypass_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#network_acl_bypass_ids CosmosdbAccount#network_acl_bypass_ids}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#public_network_access_enabled CosmosdbAccount#public_network_access_enabled}.

---

##### `restore`<sup>Optional</sup> <a name="restore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.restore"></a>

```python
restore: CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

restore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#restore CosmosdbAccount#restore}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#tags CosmosdbAccount#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.timeouts"></a>

```python
timeouts: CosmosdbAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#timeouts CosmosdbAccount#timeouts}

---

##### `virtual_network_rule`<sup>Optional</sup> <a name="virtual_network_rule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConfig.property.virtualNetworkRule"></a>

```python
virtual_network_rule: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]

virtual_network_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#virtual_network_rule CosmosdbAccount#virtual_network_rule}

---

### CosmosdbAccountConsistencyPolicy <a name="CosmosdbAccountConsistencyPolicy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountConsistencyPolicy(
  consistency_level: str,
  max_interval_in_seconds: typing.Union[int, float] = None,
  max_staleness_prefix: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel">consistency_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds">max_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix">max_staleness_prefix</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}. |

---

##### `consistency_level`<sup>Required</sup> <a name="consistency_level" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.consistencyLevel"></a>

```python
consistency_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#consistency_level CosmosdbAccount#consistency_level}.

---

##### `max_interval_in_seconds`<sup>Optional</sup> <a name="max_interval_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxIntervalInSeconds"></a>

```python
max_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_interval_in_seconds CosmosdbAccount#max_interval_in_seconds}.

---

##### `max_staleness_prefix`<sup>Optional</sup> <a name="max_staleness_prefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy.property.maxStalenessPrefix"></a>

```python
max_staleness_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_staleness_prefix CosmosdbAccount#max_staleness_prefix}.

---

### CosmosdbAccountCorsRule <a name="CosmosdbAccountCorsRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCorsRule(
  allowed_headers: typing.List[str],
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  exposed_headers: typing.List[str],
  max_age_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}. |

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_headers CosmosdbAccount#allowed_headers}.

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_methods CosmosdbAccount#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#allowed_origins CosmosdbAccount#allowed_origins}.

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#exposed_headers CosmosdbAccount#exposed_headers}.

---

##### `max_age_in_seconds`<sup>Optional</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#max_age_in_seconds CosmosdbAccount#max_age_in_seconds}.

---

### CosmosdbAccountGeoLocation <a name="CosmosdbAccountGeoLocation" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountGeoLocation(
  failover_priority: typing.Union[int, float],
  location: str,
  zone_redundant: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority">failover_priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant">zone_redundant</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}. |

---

##### `failover_priority`<sup>Required</sup> <a name="failover_priority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.failoverPriority"></a>

```python
failover_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#failover_priority CosmosdbAccount#failover_priority}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#location CosmosdbAccount#location}.

---

##### `zone_redundant`<sup>Optional</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation.property.zoneRedundant"></a>

```python
zone_redundant: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#zone_redundant CosmosdbAccount#zone_redundant}.

---

### CosmosdbAccountIdentity <a name="CosmosdbAccountIdentity" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#type CosmosdbAccount#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#identity_ids CosmosdbAccount#identity_ids}.

---

### CosmosdbAccountRestore <a name="CosmosdbAccountRestore" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountRestore(
  restore_timestamp_in_utc: str,
  source_cosmosdb_account_id: str,
  database: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc">restore_timestamp_in_utc</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId">source_cosmosdb_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]</code> | database block. |

---

##### `restore_timestamp_in_utc`<sup>Required</sup> <a name="restore_timestamp_in_utc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.restoreTimestampInUtc"></a>

```python
restore_timestamp_in_utc: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#restore_timestamp_in_utc CosmosdbAccount#restore_timestamp_in_utc}.

---

##### `source_cosmosdb_account_id`<sup>Required</sup> <a name="source_cosmosdb_account_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.sourceCosmosdbAccountId"></a>

```python
source_cosmosdb_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#source_cosmosdb_account_id CosmosdbAccount#source_cosmosdb_account_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore.property.database"></a>

```python
database: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#database CosmosdbAccount#database}

---

### CosmosdbAccountRestoreDatabase <a name="CosmosdbAccountRestoreDatabase" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountRestoreDatabase(
  name: str,
  collection_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames">collection_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#name CosmosdbAccount#name}.

---

##### `collection_names`<sup>Optional</sup> <a name="collection_names" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase.property.collectionNames"></a>

```python
collection_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#collection_names CosmosdbAccount#collection_names}.

---

### CosmosdbAccountTimeouts <a name="CosmosdbAccountTimeouts" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#create CosmosdbAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#delete CosmosdbAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#read CosmosdbAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#update CosmosdbAccount#update}.

---

### CosmosdbAccountVirtualNetworkRule <a name="CosmosdbAccountVirtualNetworkRule" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountVirtualNetworkRule(
  id: str,
  ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#id CosmosdbAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_missing_vnet_service_endpoint`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/cosmosdb_account#ignore_missing_vnet_service_endpoint CosmosdbAccount#ignore_missing_vnet_service_endpoint}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbAccountAnalyticalStorageOutputReference <a name="CosmosdbAccountAnalyticalStorageOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput">schema_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schema_type_input`<sup>Optional</sup> <a name="schema_type_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaTypeInput"></a>

```python
schema_type_input: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorageOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountAnalyticalStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountAnalyticalStorage">CosmosdbAccountAnalyticalStorage</a>

---


### CosmosdbAccountBackupOutputReference <a name="CosmosdbAccountBackupOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes">reset_interval_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours">reset_retention_in_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy">reset_storage_redundancy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_interval_in_minutes` <a name="reset_interval_in_minutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetIntervalInMinutes"></a>

```python
def reset_interval_in_minutes() -> None
```

##### `reset_retention_in_hours` <a name="reset_retention_in_hours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetRetentionInHours"></a>

```python
def reset_retention_in_hours() -> None
```

##### `reset_storage_redundancy` <a name="reset_storage_redundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.resetStorageRedundancy"></a>

```python
def reset_storage_redundancy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput">interval_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput">retention_in_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput">storage_redundancy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes">interval_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours">retention_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy">storage_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_in_minutes_input`<sup>Optional</sup> <a name="interval_in_minutes_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutesInput"></a>

```python
interval_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_hours_input`<sup>Optional</sup> <a name="retention_in_hours_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHoursInput"></a>

```python
retention_in_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_redundancy_input`<sup>Optional</sup> <a name="storage_redundancy_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancyInput"></a>

```python
storage_redundancy_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `interval_in_minutes`<sup>Required</sup> <a name="interval_in_minutes" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.intervalInMinutes"></a>

```python
interval_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_hours`<sup>Required</sup> <a name="retention_in_hours" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.retentionInHours"></a>

```python
retention_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_redundancy`<sup>Required</sup> <a name="storage_redundancy" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.storageRedundancy"></a>

```python
storage_redundancy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackupOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountBackup">CosmosdbAccountBackup</a>

---


### CosmosdbAccountCapabilitiesList <a name="CosmosdbAccountCapabilitiesList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCapabilitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbAccountCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbAccountCapabilities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]]

---


### CosmosdbAccountCapabilitiesOutputReference <a name="CosmosdbAccountCapabilitiesOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilitiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbAccountCapabilities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapabilities">CosmosdbAccountCapabilities</a>]

---


### CosmosdbAccountCapacityOutputReference <a name="CosmosdbAccountCapacityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput">total_throughput_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit">total_throughput_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `total_throughput_limit_input`<sup>Optional</sup> <a name="total_throughput_limit_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimitInput"></a>

```python
total_throughput_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_throughput_limit`<sup>Required</sup> <a name="total_throughput_limit" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.totalThroughputLimit"></a>

```python
total_throughput_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacityOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountCapacity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCapacity">CosmosdbAccountCapacity</a>

---


### CosmosdbAccountConsistencyPolicyOutputReference <a name="CosmosdbAccountConsistencyPolicyOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds">reset_max_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix">reset_max_staleness_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_interval_in_seconds` <a name="reset_max_interval_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxIntervalInSeconds"></a>

```python
def reset_max_interval_in_seconds() -> None
```

##### `reset_max_staleness_prefix` <a name="reset_max_staleness_prefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.resetMaxStalenessPrefix"></a>

```python
def reset_max_staleness_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput">consistency_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput">max_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput">max_staleness_prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel">consistency_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds">max_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix">max_staleness_prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consistency_level_input`<sup>Optional</sup> <a name="consistency_level_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevelInput"></a>

```python
consistency_level_input: str
```

- *Type:* str

---

##### `max_interval_in_seconds_input`<sup>Optional</sup> <a name="max_interval_in_seconds_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSecondsInput"></a>

```python
max_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_staleness_prefix_input`<sup>Optional</sup> <a name="max_staleness_prefix_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefixInput"></a>

```python
max_staleness_prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consistency_level`<sup>Required</sup> <a name="consistency_level" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.consistencyLevel"></a>

```python
consistency_level: str
```

- *Type:* str

---

##### `max_interval_in_seconds`<sup>Required</sup> <a name="max_interval_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxIntervalInSeconds"></a>

```python
max_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_staleness_prefix`<sup>Required</sup> <a name="max_staleness_prefix" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.maxStalenessPrefix"></a>

```python
max_staleness_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountConsistencyPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountConsistencyPolicy">CosmosdbAccountConsistencyPolicy</a>

---


### CosmosdbAccountCorsRuleOutputReference <a name="CosmosdbAccountCorsRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds">reset_max_age_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_age_in_seconds` <a name="reset_max_age_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.resetMaxAgeInSeconds"></a>

```python
def reset_max_age_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput">max_age_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds">max_age_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds_input`<sup>Optional</sup> <a name="max_age_in_seconds_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSecondsInput"></a>

```python
max_age_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_in_seconds`<sup>Required</sup> <a name="max_age_in_seconds" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.maxAgeInSeconds"></a>

```python
max_age_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountCorsRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountCorsRule">CosmosdbAccountCorsRule</a>

---


### CosmosdbAccountGeoLocationList <a name="CosmosdbAccountGeoLocationList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountGeoLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbAccountGeoLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbAccountGeoLocation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]]

---


### CosmosdbAccountGeoLocationOutputReference <a name="CosmosdbAccountGeoLocationOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant">reset_zone_redundant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_zone_redundant` <a name="reset_zone_redundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.resetZoneRedundant"></a>

```python
def reset_zone_redundant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput">failover_priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput">zone_redundant_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority">failover_priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant">zone_redundant</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `failover_priority_input`<sup>Optional</sup> <a name="failover_priority_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriorityInput"></a>

```python
failover_priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `zone_redundant_input`<sup>Optional</sup> <a name="zone_redundant_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundantInput"></a>

```python
zone_redundant_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failover_priority`<sup>Required</sup> <a name="failover_priority" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.failoverPriority"></a>

```python
failover_priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `zone_redundant`<sup>Required</sup> <a name="zone_redundant" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.zoneRedundant"></a>

```python
zone_redundant: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbAccountGeoLocation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountGeoLocation">CosmosdbAccountGeoLocation</a>]

---


### CosmosdbAccountIdentityOutputReference <a name="CosmosdbAccountIdentityOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentityOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountIdentity">CosmosdbAccountIdentity</a>

---


### CosmosdbAccountRestoreDatabaseList <a name="CosmosdbAccountRestoreDatabaseList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountRestoreDatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbAccountRestoreDatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]

---


### CosmosdbAccountRestoreDatabaseOutputReference <a name="CosmosdbAccountRestoreDatabaseOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames">reset_collection_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_collection_names` <a name="reset_collection_names" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.resetCollectionNames"></a>

```python
def reset_collection_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput">collection_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames">collection_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_names_input`<sup>Optional</sup> <a name="collection_names_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNamesInput"></a>

```python
collection_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `collection_names`<sup>Required</sup> <a name="collection_names" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.collectionNames"></a>

```python
collection_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbAccountRestoreDatabase]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]

---


### CosmosdbAccountRestoreOutputReference <a name="CosmosdbAccountRestoreOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountRestoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase">reset_database</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_database` <a name="put_database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase"></a>

```python
def put_database(
  value: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.putDatabase.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]

---

##### `reset_database` <a name="reset_database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database">database</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput">database_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput">restore_timestamp_in_utc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput">source_cosmosdb_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc">restore_timestamp_in_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId">source_cosmosdb_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.database"></a>

```python
database: CosmosdbAccountRestoreDatabaseList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabaseList">CosmosdbAccountRestoreDatabaseList</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.databaseInput"></a>

```python
database_input: typing.Union[IResolvable, typing.List[CosmosdbAccountRestoreDatabase]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreDatabase">CosmosdbAccountRestoreDatabase</a>]]

---

##### `restore_timestamp_in_utc_input`<sup>Optional</sup> <a name="restore_timestamp_in_utc_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtcInput"></a>

```python
restore_timestamp_in_utc_input: str
```

- *Type:* str

---

##### `source_cosmosdb_account_id_input`<sup>Optional</sup> <a name="source_cosmosdb_account_id_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountIdInput"></a>

```python
source_cosmosdb_account_id_input: str
```

- *Type:* str

---

##### `restore_timestamp_in_utc`<sup>Required</sup> <a name="restore_timestamp_in_utc" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.restoreTimestampInUtc"></a>

```python
restore_timestamp_in_utc: str
```

- *Type:* str

---

##### `source_cosmosdb_account_id`<sup>Required</sup> <a name="source_cosmosdb_account_id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.sourceCosmosdbAccountId"></a>

```python
source_cosmosdb_account_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestoreOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbAccountRestore
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountRestore">CosmosdbAccountRestore</a>

---


### CosmosdbAccountTimeoutsOutputReference <a name="CosmosdbAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountTimeouts">CosmosdbAccountTimeouts</a>]

---


### CosmosdbAccountVirtualNetworkRuleList <a name="CosmosdbAccountVirtualNetworkRuleList" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbAccountVirtualNetworkRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbAccountVirtualNetworkRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]]

---


### CosmosdbAccountVirtualNetworkRuleOutputReference <a name="CosmosdbAccountVirtualNetworkRuleOutputReference" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_account

cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint">reset_ignore_missing_vnet_service_endpoint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ignore_missing_vnet_service_endpoint` <a name="reset_ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.resetIgnoreMissingVnetServiceEndpoint"></a>

```python
def reset_ignore_missing_vnet_service_endpoint() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput">ignore_missing_vnet_service_endpoint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint">ignore_missing_vnet_service_endpoint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint_input`<sup>Optional</sup> <a name="ignore_missing_vnet_service_endpoint_input" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpointInput"></a>

```python
ignore_missing_vnet_service_endpoint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_missing_vnet_service_endpoint`<sup>Required</sup> <a name="ignore_missing_vnet_service_endpoint" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.ignoreMissingVnetServiceEndpoint"></a>

```python
ignore_missing_vnet_service_endpoint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbAccountVirtualNetworkRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbAccount.CosmosdbAccountVirtualNetworkRule">CosmosdbAccountVirtualNetworkRule</a>]

---



