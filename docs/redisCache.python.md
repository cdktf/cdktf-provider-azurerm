# `redisCache` Submodule <a name="`redisCache` Submodule" id="@cdktf/provider-azurerm.redisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCache <a name="RedisCache" id="@cdktf/provider-azurerm.redisCache.RedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCache(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: typing.Union[int, float],
  family: str,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  enable_non_ssl_port: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: RedisCacheIdentity = None,
  minimum_tls_version: str = None,
  patch_schedule: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]] = None,
  private_static_ip_address: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  redis_configuration: RedisCacheRedisConfiguration = None,
  redis_version: str = None,
  replicas_per_master: typing.Union[int, float] = None,
  replicas_per_primary: typing.Union[int, float] = None,
  shard_count: typing.Union[int, float] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tenant_settings: typing.Mapping[str] = None,
  timeouts: RedisCacheTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.enableNonSslPort">enable_non_ssl_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.patchSchedule">patch_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]</code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.privateStaticIpAddress">private_static_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisConfiguration">redis_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisVersion">redis_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerMaster">replicas_per_master</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerPrimary">replicas_per_primary</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tenantSettings">tenant_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.capacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.family"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `enable_non_ssl_port`<sup>Optional</sup> <a name="enable_non_ssl_port" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.enableNonSslPort"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `patch_schedule`<sup>Optional</sup> <a name="patch_schedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.patchSchedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `private_static_ip_address`<sup>Optional</sup> <a name="private_static_ip_address" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.privateStaticIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `redis_configuration`<sup>Optional</sup> <a name="redis_configuration" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `redis_version`<sup>Optional</sup> <a name="redis_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `replicas_per_master`<sup>Optional</sup> <a name="replicas_per_master" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerMaster"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `replicas_per_primary`<sup>Optional</sup> <a name="replicas_per_primary" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerPrimary"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `shard_count`<sup>Optional</sup> <a name="shard_count" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.shardCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `tenant_settings`<sup>Optional</sup> <a name="tenant_settings" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tenantSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule">put_patch_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration">put_redis_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort">reset_enable_non_ssl_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion">reset_minimum_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule">reset_patch_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress">reset_private_static_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration">reset_redis_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion">reset_redis_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster">reset_replicas_per_master</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary">reset_replicas_per_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount">reset_shard_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings">reset_tenant_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCache.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#type RedisCache#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

##### `put_patch_schedule` <a name="put_patch_schedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule"></a>

```python
def put_patch_schedule(
  value: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]

---

##### `put_redis_configuration` <a name="put_redis_configuration" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration"></a>

```python
def put_redis_configuration(
  active_directory_authentication_enabled: typing.Union[bool, IResolvable] = None,
  aof_backup_enabled: typing.Union[bool, IResolvable] = None,
  aof_storage_connection_string0: str = None,
  aof_storage_connection_string1: str = None,
  data_persistence_authentication_method: str = None,
  enable_authentication: typing.Union[bool, IResolvable] = None,
  maxfragmentationmemory_reserved: typing.Union[int, float] = None,
  maxmemory_delta: typing.Union[int, float] = None,
  maxmemory_policy: str = None,
  maxmemory_reserved: typing.Union[int, float] = None,
  notify_keyspace_events: str = None,
  rdb_backup_enabled: typing.Union[bool, IResolvable] = None,
  rdb_backup_frequency: typing.Union[int, float] = None,
  rdb_backup_max_snapshot_count: typing.Union[int, float] = None,
  rdb_storage_connection_string: str = None,
  storage_account_subscription_id: str = None
) -> None
```

###### `active_directory_authentication_enabled`<sup>Optional</sup> <a name="active_directory_authentication_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.activeDirectoryAuthenticationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}.

---

###### `aof_backup_enabled`<sup>Optional</sup> <a name="aof_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.aofBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

###### `aof_storage_connection_string0`<sup>Optional</sup> <a name="aof_storage_connection_string0" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.aofStorageConnectionString0"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

###### `aof_storage_connection_string1`<sup>Optional</sup> <a name="aof_storage_connection_string1" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.aofStorageConnectionString1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

###### `data_persistence_authentication_method`<sup>Optional</sup> <a name="data_persistence_authentication_method" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.dataPersistenceAuthenticationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}.

---

###### `enable_authentication`<sup>Optional</sup> <a name="enable_authentication" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.enableAuthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}.

---

###### `maxfragmentationmemory_reserved`<sup>Optional</sup> <a name="maxfragmentationmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.maxfragmentationmemoryReserved"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

###### `maxmemory_delta`<sup>Optional</sup> <a name="maxmemory_delta" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.maxmemoryDelta"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

###### `maxmemory_policy`<sup>Optional</sup> <a name="maxmemory_policy" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.maxmemoryPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

###### `maxmemory_reserved`<sup>Optional</sup> <a name="maxmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.maxmemoryReserved"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

###### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.notifyKeyspaceEvents"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

###### `rdb_backup_enabled`<sup>Optional</sup> <a name="rdb_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.rdbBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

###### `rdb_backup_frequency`<sup>Optional</sup> <a name="rdb_backup_frequency" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.rdbBackupFrequency"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

###### `rdb_backup_max_snapshot_count`<sup>Optional</sup> <a name="rdb_backup_max_snapshot_count" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.rdbBackupMaxSnapshotCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

###### `rdb_storage_connection_string`<sup>Optional</sup> <a name="rdb_storage_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.rdbStorageConnectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

###### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.storageAccountSubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#create RedisCache#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#read RedisCache#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#update RedisCache#update}.

---

##### `reset_enable_non_ssl_port` <a name="reset_enable_non_ssl_port" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetEnableNonSslPort"></a>

```python
def reset_enable_non_ssl_port() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_minimum_tls_version` <a name="reset_minimum_tls_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion"></a>

```python
def reset_minimum_tls_version() -> None
```

##### `reset_patch_schedule` <a name="reset_patch_schedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule"></a>

```python
def reset_patch_schedule() -> None
```

##### `reset_private_static_ip_address` <a name="reset_private_static_ip_address" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress"></a>

```python
def reset_private_static_ip_address() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_redis_configuration` <a name="reset_redis_configuration" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration"></a>

```python
def reset_redis_configuration() -> None
```

##### `reset_redis_version` <a name="reset_redis_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion"></a>

```python
def reset_redis_version() -> None
```

##### `reset_replicas_per_master` <a name="reset_replicas_per_master" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster"></a>

```python
def reset_replicas_per_master() -> None
```

##### `reset_replicas_per_primary` <a name="reset_replicas_per_primary" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary"></a>

```python
def reset_replicas_per_primary() -> None
```

##### `reset_shard_count` <a name="reset_shard_count" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount"></a>

```python
def reset_shard_count() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenant_settings` <a name="reset_tenant_settings" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings"></a>

```python
def reset_tenant_settings() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCache.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCache.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCache.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCache.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisCache to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule">patch_schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString">primary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration">redis_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString">secondary_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort">ssl_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput">capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput">enable_non_ssl_port_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput">family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput">minimum_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput">patch_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput">private_static_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput">redis_configuration_input</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput">redis_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput">replicas_per_master_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput">replicas_per_primary_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput">shard_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput">tenant_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort">enable_non_ssl_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress">private_static_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion">redis_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster">replicas_per_master</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary">replicas_per_primary</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings">tenant_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identity"></a>

```python
identity: RedisCacheIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a>

---

##### `patch_schedule`<sup>Required</sup> <a name="patch_schedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule"></a>

```python
patch_schedule: RedisCachePatchScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `primary_connection_string`<sup>Required</sup> <a name="primary_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString"></a>

```python
primary_connection_string: str
```

- *Type:* str

---

##### `redis_configuration`<sup>Required</sup> <a name="redis_configuration" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration"></a>

```python
redis_configuration: RedisCacheRedisConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a>

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `secondary_connection_string`<sup>Required</sup> <a name="secondary_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString"></a>

```python
secondary_connection_string: str
```

- *Type:* str

---

##### `ssl_port`<sup>Required</sup> <a name="ssl_port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort"></a>

```python
ssl_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts"></a>

```python
timeouts: RedisCacheTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a>

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput"></a>

```python
capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_non_ssl_port_input`<sup>Optional</sup> <a name="enable_non_ssl_port_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPortInput"></a>

```python
enable_non_ssl_port_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `family_input`<sup>Optional</sup> <a name="family_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput"></a>

```python
family_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput"></a>

```python
identity_input: RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `minimum_tls_version_input`<sup>Optional</sup> <a name="minimum_tls_version_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput"></a>

```python
minimum_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `patch_schedule_input`<sup>Optional</sup> <a name="patch_schedule_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput"></a>

```python
patch_schedule_input: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]

---

##### `private_static_ip_address_input`<sup>Optional</sup> <a name="private_static_ip_address_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput"></a>

```python
private_static_ip_address_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `redis_configuration_input`<sup>Optional</sup> <a name="redis_configuration_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput"></a>

```python
redis_configuration_input: RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `redis_version_input`<sup>Optional</sup> <a name="redis_version_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput"></a>

```python
redis_version_input: str
```

- *Type:* str

---

##### `replicas_per_master_input`<sup>Optional</sup> <a name="replicas_per_master_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput"></a>

```python
replicas_per_master_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas_per_primary_input`<sup>Optional</sup> <a name="replicas_per_primary_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput"></a>

```python
replicas_per_primary_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `shard_count_input`<sup>Optional</sup> <a name="shard_count_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput"></a>

```python
shard_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_settings_input`<sup>Optional</sup> <a name="tenant_settings_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput"></a>

```python
tenant_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedisCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_non_ssl_port`<sup>Required</sup> <a name="enable_non_ssl_port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.enableNonSslPort"></a>

```python
enable_non_ssl_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_static_ip_address`<sup>Required</sup> <a name="private_static_ip_address" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress"></a>

```python
private_static_ip_address: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `redis_version`<sup>Required</sup> <a name="redis_version" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion"></a>

```python
redis_version: str
```

- *Type:* str

---

##### `replicas_per_master`<sup>Required</sup> <a name="replicas_per_master" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster"></a>

```python
replicas_per_master: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replicas_per_primary`<sup>Required</sup> <a name="replicas_per_primary" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary"></a>

```python
replicas_per_primary: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tenant_settings`<sup>Required</sup> <a name="tenant_settings" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings"></a>

```python
tenant_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheConfig <a name="RedisCacheConfig" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity: typing.Union[int, float],
  family: str,
  location: str,
  name: str,
  resource_group_name: str,
  sku_name: str,
  enable_non_ssl_port: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: RedisCacheIdentity = None,
  minimum_tls_version: str = None,
  patch_schedule: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]] = None,
  private_static_ip_address: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  redis_configuration: RedisCacheRedisConfiguration = None,
  redis_version: str = None,
  replicas_per_master: typing.Union[int, float] = None,
  replicas_per_primary: typing.Union[int, float] = None,
  shard_count: typing.Union[int, float] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tenant_settings: typing.Mapping[str] = None,
  timeouts: RedisCacheTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family">family</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort">enable_non_ssl_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule">patch_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]</code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress">private_static_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration">redis_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion">redis_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster">replicas_per_master</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary">replicas_per_primary</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings">tenant_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family"></a>

```python
family: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `enable_non_ssl_port`<sup>Optional</sup> <a name="enable_non_ssl_port" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.enableNonSslPort"></a>

```python
enable_non_ssl_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_non_ssl_port RedisCache#enable_non_ssl_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity"></a>

```python
identity: RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `patch_schedule`<sup>Optional</sup> <a name="patch_schedule" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule"></a>

```python
patch_schedule: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `private_static_ip_address`<sup>Optional</sup> <a name="private_static_ip_address" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress"></a>

```python
private_static_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `redis_configuration`<sup>Optional</sup> <a name="redis_configuration" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration"></a>

```python
redis_configuration: RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `redis_version`<sup>Optional</sup> <a name="redis_version" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion"></a>

```python
redis_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `replicas_per_master`<sup>Optional</sup> <a name="replicas_per_master" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster"></a>

```python
replicas_per_master: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `replicas_per_primary`<sup>Optional</sup> <a name="replicas_per_primary" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary"></a>

```python
replicas_per_primary: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `shard_count`<sup>Optional</sup> <a name="shard_count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `tenant_settings`<sup>Optional</sup> <a name="tenant_settings" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings"></a>

```python
tenant_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts"></a>

```python
timeouts: RedisCacheTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

### RedisCacheIdentity <a name="RedisCacheIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#type RedisCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#type RedisCache#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

### RedisCachePatchSchedule <a name="RedisCachePatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCachePatchSchedule(
  day_of_week: str,
  maintenance_window: str = None,
  start_hour_utc: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc">start_hour_utc</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}. |

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}.

---

##### `start_hour_utc`<sup>Optional</sup> <a name="start_hour_utc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc"></a>

```python
start_hour_utc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}.

---

### RedisCacheRedisConfiguration <a name="RedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheRedisConfiguration(
  active_directory_authentication_enabled: typing.Union[bool, IResolvable] = None,
  aof_backup_enabled: typing.Union[bool, IResolvable] = None,
  aof_storage_connection_string0: str = None,
  aof_storage_connection_string1: str = None,
  data_persistence_authentication_method: str = None,
  enable_authentication: typing.Union[bool, IResolvable] = None,
  maxfragmentationmemory_reserved: typing.Union[int, float] = None,
  maxmemory_delta: typing.Union[int, float] = None,
  maxmemory_policy: str = None,
  maxmemory_reserved: typing.Union[int, float] = None,
  notify_keyspace_events: str = None,
  rdb_backup_enabled: typing.Union[bool, IResolvable] = None,
  rdb_backup_frequency: typing.Union[int, float] = None,
  rdb_backup_max_snapshot_count: typing.Union[int, float] = None,
  rdb_storage_connection_string: str = None,
  storage_account_subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled">active_directory_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled">aof_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0">aof_storage_connection_string0</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1">aof_storage_connection_string1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod">data_persistence_authentication_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication">enable_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved">maxfragmentationmemory_reserved</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta">maxmemory_delta</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy">maxmemory_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved">maxmemory_reserved</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled">rdb_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency">rdb_backup_frequency</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount">rdb_backup_max_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString">rdb_storage_connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}. |

---

##### `active_directory_authentication_enabled`<sup>Optional</sup> <a name="active_directory_authentication_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled"></a>

```python
active_directory_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}.

---

##### `aof_backup_enabled`<sup>Optional</sup> <a name="aof_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled"></a>

```python
aof_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

##### `aof_storage_connection_string0`<sup>Optional</sup> <a name="aof_storage_connection_string0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0"></a>

```python
aof_storage_connection_string0: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

##### `aof_storage_connection_string1`<sup>Optional</sup> <a name="aof_storage_connection_string1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1"></a>

```python
aof_storage_connection_string1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

##### `data_persistence_authentication_method`<sup>Optional</sup> <a name="data_persistence_authentication_method" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod"></a>

```python
data_persistence_authentication_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}.

---

##### `enable_authentication`<sup>Optional</sup> <a name="enable_authentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.enableAuthentication"></a>

```python
enable_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#enable_authentication RedisCache#enable_authentication}.

---

##### `maxfragmentationmemory_reserved`<sup>Optional</sup> <a name="maxfragmentationmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved"></a>

```python
maxfragmentationmemory_reserved: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

##### `maxmemory_delta`<sup>Optional</sup> <a name="maxmemory_delta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta"></a>

```python
maxmemory_delta: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

##### `maxmemory_policy`<sup>Optional</sup> <a name="maxmemory_policy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy"></a>

```python
maxmemory_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

##### `maxmemory_reserved`<sup>Optional</sup> <a name="maxmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved"></a>

```python
maxmemory_reserved: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

##### `notify_keyspace_events`<sup>Optional</sup> <a name="notify_keyspace_events" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

##### `rdb_backup_enabled`<sup>Optional</sup> <a name="rdb_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled"></a>

```python
rdb_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

##### `rdb_backup_frequency`<sup>Optional</sup> <a name="rdb_backup_frequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency"></a>

```python
rdb_backup_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

##### `rdb_backup_max_snapshot_count`<sup>Optional</sup> <a name="rdb_backup_max_snapshot_count" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount"></a>

```python
rdb_backup_max_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

##### `rdb_storage_connection_string`<sup>Optional</sup> <a name="rdb_storage_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString"></a>

```python
rdb_storage_connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

##### `storage_account_subscription_id`<sup>Optional</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}.

---

### RedisCacheTimeouts <a name="RedisCacheTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#create RedisCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#delete RedisCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#read RedisCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#update RedisCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#create RedisCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#read RedisCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/redis_cache#update RedisCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheIdentityOutputReference <a name="RedisCacheIdentityOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue"></a>

```python
internal_value: RedisCacheIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---


### RedisCachePatchScheduleList <a name="RedisCachePatchScheduleList" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCachePatchScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisCachePatchScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedisCachePatchSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]]

---


### RedisCachePatchScheduleOutputReference <a name="RedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCachePatchScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc">reset_start_hour_utc</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_start_hour_utc` <a name="reset_start_hour_utc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc"></a>

```python
def reset_start_hour_utc() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput">start_hour_utc_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc">start_hour_utc</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: str
```

- *Type:* str

---

##### `start_hour_utc_input`<sup>Optional</sup> <a name="start_hour_utc_input" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput"></a>

```python
start_hour_utc_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: str
```

- *Type:* str

---

##### `start_hour_utc`<sup>Required</sup> <a name="start_hour_utc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```python
start_hour_utc: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisCachePatchSchedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>]

---


### RedisCacheRedisConfigurationOutputReference <a name="RedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheRedisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled">reset_active_directory_authentication_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled">reset_aof_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0">reset_aof_storage_connection_string0</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1">reset_aof_storage_connection_string1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod">reset_data_persistence_authentication_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication">reset_enable_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved">reset_maxfragmentationmemory_reserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta">reset_maxmemory_delta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy">reset_maxmemory_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved">reset_maxmemory_reserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents">reset_notify_keyspace_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled">reset_rdb_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency">reset_rdb_backup_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount">reset_rdb_backup_max_snapshot_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString">reset_rdb_storage_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId">reset_storage_account_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active_directory_authentication_enabled` <a name="reset_active_directory_authentication_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled"></a>

```python
def reset_active_directory_authentication_enabled() -> None
```

##### `reset_aof_backup_enabled` <a name="reset_aof_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled"></a>

```python
def reset_aof_backup_enabled() -> None
```

##### `reset_aof_storage_connection_string0` <a name="reset_aof_storage_connection_string0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0"></a>

```python
def reset_aof_storage_connection_string0() -> None
```

##### `reset_aof_storage_connection_string1` <a name="reset_aof_storage_connection_string1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1"></a>

```python
def reset_aof_storage_connection_string1() -> None
```

##### `reset_data_persistence_authentication_method` <a name="reset_data_persistence_authentication_method" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod"></a>

```python
def reset_data_persistence_authentication_method() -> None
```

##### `reset_enable_authentication` <a name="reset_enable_authentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetEnableAuthentication"></a>

```python
def reset_enable_authentication() -> None
```

##### `reset_maxfragmentationmemory_reserved` <a name="reset_maxfragmentationmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved"></a>

```python
def reset_maxfragmentationmemory_reserved() -> None
```

##### `reset_maxmemory_delta` <a name="reset_maxmemory_delta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta"></a>

```python
def reset_maxmemory_delta() -> None
```

##### `reset_maxmemory_policy` <a name="reset_maxmemory_policy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy"></a>

```python
def reset_maxmemory_policy() -> None
```

##### `reset_maxmemory_reserved` <a name="reset_maxmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved"></a>

```python
def reset_maxmemory_reserved() -> None
```

##### `reset_notify_keyspace_events` <a name="reset_notify_keyspace_events" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents"></a>

```python
def reset_notify_keyspace_events() -> None
```

##### `reset_rdb_backup_enabled` <a name="reset_rdb_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled"></a>

```python
def reset_rdb_backup_enabled() -> None
```

##### `reset_rdb_backup_frequency` <a name="reset_rdb_backup_frequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency"></a>

```python
def reset_rdb_backup_frequency() -> None
```

##### `reset_rdb_backup_max_snapshot_count` <a name="reset_rdb_backup_max_snapshot_count" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount"></a>

```python
def reset_rdb_backup_max_snapshot_count() -> None
```

##### `reset_rdb_storage_connection_string` <a name="reset_rdb_storage_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString"></a>

```python
def reset_rdb_storage_connection_string() -> None
```

##### `reset_storage_account_subscription_id` <a name="reset_storage_account_subscription_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId"></a>

```python
def reset_storage_account_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients">maxclients</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput">active_directory_authentication_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput">aof_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input">aof_storage_connection_string0_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input">aof_storage_connection_string1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput">data_persistence_authentication_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput">enable_authentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput">maxfragmentationmemory_reserved_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput">maxmemory_delta_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput">maxmemory_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput">maxmemory_reserved_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput">notify_keyspace_events_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput">rdb_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput">rdb_backup_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput">rdb_backup_max_snapshot_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput">rdb_storage_connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput">storage_account_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled">active_directory_authentication_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">aof_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">aof_storage_connection_string0</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">aof_storage_connection_string1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod">data_persistence_authentication_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication">enable_authentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">maxfragmentationmemory_reserved</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">maxmemory_delta</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">maxmemory_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">maxmemory_reserved</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">notify_keyspace_events</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">rdb_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">rdb_backup_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">rdb_backup_max_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">rdb_storage_connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId">storage_account_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maxclients`<sup>Required</sup> <a name="maxclients" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```python
maxclients: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_directory_authentication_enabled_input`<sup>Optional</sup> <a name="active_directory_authentication_enabled_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput"></a>

```python
active_directory_authentication_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aof_backup_enabled_input`<sup>Optional</sup> <a name="aof_backup_enabled_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput"></a>

```python
aof_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aof_storage_connection_string0_input`<sup>Optional</sup> <a name="aof_storage_connection_string0_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input"></a>

```python
aof_storage_connection_string0_input: str
```

- *Type:* str

---

##### `aof_storage_connection_string1_input`<sup>Optional</sup> <a name="aof_storage_connection_string1_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input"></a>

```python
aof_storage_connection_string1_input: str
```

- *Type:* str

---

##### `data_persistence_authentication_method_input`<sup>Optional</sup> <a name="data_persistence_authentication_method_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput"></a>

```python
data_persistence_authentication_method_input: str
```

- *Type:* str

---

##### `enable_authentication_input`<sup>Optional</sup> <a name="enable_authentication_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthenticationInput"></a>

```python
enable_authentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maxfragmentationmemory_reserved_input`<sup>Optional</sup> <a name="maxfragmentationmemory_reserved_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput"></a>

```python
maxfragmentationmemory_reserved_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_delta_input`<sup>Optional</sup> <a name="maxmemory_delta_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput"></a>

```python
maxmemory_delta_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_policy_input`<sup>Optional</sup> <a name="maxmemory_policy_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput"></a>

```python
maxmemory_policy_input: str
```

- *Type:* str

---

##### `maxmemory_reserved_input`<sup>Optional</sup> <a name="maxmemory_reserved_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput"></a>

```python
maxmemory_reserved_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_keyspace_events_input`<sup>Optional</sup> <a name="notify_keyspace_events_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput"></a>

```python
notify_keyspace_events_input: str
```

- *Type:* str

---

##### `rdb_backup_enabled_input`<sup>Optional</sup> <a name="rdb_backup_enabled_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput"></a>

```python
rdb_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rdb_backup_frequency_input`<sup>Optional</sup> <a name="rdb_backup_frequency_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput"></a>

```python
rdb_backup_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rdb_backup_max_snapshot_count_input`<sup>Optional</sup> <a name="rdb_backup_max_snapshot_count_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput"></a>

```python
rdb_backup_max_snapshot_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rdb_storage_connection_string_input`<sup>Optional</sup> <a name="rdb_storage_connection_string_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput"></a>

```python
rdb_storage_connection_string_input: str
```

- *Type:* str

---

##### `storage_account_subscription_id_input`<sup>Optional</sup> <a name="storage_account_subscription_id_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput"></a>

```python
storage_account_subscription_id_input: str
```

- *Type:* str

---

##### `active_directory_authentication_enabled`<sup>Required</sup> <a name="active_directory_authentication_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled"></a>

```python
active_directory_authentication_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aof_backup_enabled`<sup>Required</sup> <a name="aof_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```python
aof_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aof_storage_connection_string0`<sup>Required</sup> <a name="aof_storage_connection_string0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```python
aof_storage_connection_string0: str
```

- *Type:* str

---

##### `aof_storage_connection_string1`<sup>Required</sup> <a name="aof_storage_connection_string1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```python
aof_storage_connection_string1: str
```

- *Type:* str

---

##### `data_persistence_authentication_method`<sup>Required</sup> <a name="data_persistence_authentication_method" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod"></a>

```python
data_persistence_authentication_method: str
```

- *Type:* str

---

##### `enable_authentication`<sup>Required</sup> <a name="enable_authentication" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.enableAuthentication"></a>

```python
enable_authentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `maxfragmentationmemory_reserved`<sup>Required</sup> <a name="maxfragmentationmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```python
maxfragmentationmemory_reserved: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_delta`<sup>Required</sup> <a name="maxmemory_delta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```python
maxmemory_delta: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maxmemory_policy`<sup>Required</sup> <a name="maxmemory_policy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```python
maxmemory_policy: str
```

- *Type:* str

---

##### `maxmemory_reserved`<sup>Required</sup> <a name="maxmemory_reserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```python
maxmemory_reserved: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `notify_keyspace_events`<sup>Required</sup> <a name="notify_keyspace_events" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```python
notify_keyspace_events: str
```

- *Type:* str

---

##### `rdb_backup_enabled`<sup>Required</sup> <a name="rdb_backup_enabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```python
rdb_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rdb_backup_frequency`<sup>Required</sup> <a name="rdb_backup_frequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```python
rdb_backup_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rdb_backup_max_snapshot_count`<sup>Required</sup> <a name="rdb_backup_max_snapshot_count" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```python
rdb_backup_max_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rdb_storage_connection_string`<sup>Required</sup> <a name="rdb_storage_connection_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```python
rdb_storage_connection_string: str
```

- *Type:* str

---

##### `storage_account_subscription_id`<sup>Required</sup> <a name="storage_account_subscription_id" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId"></a>

```python
storage_account_subscription_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: RedisCacheRedisConfiguration
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---


### RedisCacheTimeoutsOutputReference <a name="RedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_cache

redisCache.RedisCacheTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisCacheTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>]

---



