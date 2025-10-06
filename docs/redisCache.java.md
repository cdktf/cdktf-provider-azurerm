# `redisCache` Submodule <a name="`redisCache` Submodule" id="@cdktf/provider-azurerm.redisCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisCache <a name="RedisCache" id="@cdktf/provider-azurerm.redisCache.RedisCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache azurerm_redis_cache}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCache;

RedisCache.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(java.lang.Number)
    .family(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .accessKeysAuthenticationEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(RedisCacheIdentity)
//  .minimumTlsVersion(java.lang.String)
//  .nonSslPortEnabled(java.lang.Boolean|IResolvable)
//  .patchSchedule(IResolvable|java.util.List<RedisCachePatchSchedule>)
//  .privateStaticIpAddress(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
//  .redisConfiguration(RedisCacheRedisConfiguration)
//  .redisVersion(java.lang.String)
//  .replicasPerMaster(java.lang.Number)
//  .replicasPerPrimary(java.lang.Number)
//  .shardCount(java.lang.Number)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedisCacheTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.family">family</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.nonSslPortEnabled">nonSslPortEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.patchSchedule">patchSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>></code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisVersion">redisVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerMaster">replicasPerMaster</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerPrimary">replicasPerPrimary</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tenantSettings">tenantSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.capacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.family"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.skuName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `accessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.accessKeysAuthenticationEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `nonSslPortEnabled`<sup>Optional</sup> <a name="nonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.nonSslPortEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}.

---

##### `patchSchedule`<sup>Optional</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.patchSchedule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>>

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `privateStaticIpAddress`<sup>Optional</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.privateStaticIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `redisConfiguration`<sup>Optional</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.redisVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `replicasPerMaster`<sup>Optional</sup> <a name="replicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerMaster"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `replicasPerPrimary`<sup>Optional</sup> <a name="replicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.replicasPerPrimary"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.shardCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `tenantSettings`<sup>Optional</sup> <a name="tenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.tenantSettings"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule">putPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration">putRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetAccessKeysAuthenticationEnabled">resetAccessKeysAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion">resetMinimumTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetNonSslPortEnabled">resetNonSslPortEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule">resetPatchSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress">resetPrivateStaticIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration">resetRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion">resetRedisVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster">resetReplicasPerMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary">resetReplicasPerPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount">resetShardCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings">resetTenantSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redisCache.RedisCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.redisCache.RedisCache.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity"></a>

```java
public void putIdentity(RedisCacheIdentity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `putPatchSchedule` <a name="putPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule"></a>

```java
public void putPatchSchedule(IResolvable|java.util.List<RedisCachePatchSchedule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putPatchSchedule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>>

---

##### `putRedisConfiguration` <a name="putRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration"></a>

```java
public void putRedisConfiguration(RedisCacheRedisConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putRedisConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts"></a>

```java
public void putTimeouts(RedisCacheTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisCache.RedisCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `resetAccessKeysAuthenticationEnabled` <a name="resetAccessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetAccessKeysAuthenticationEnabled"></a>

```java
public void resetAccessKeysAuthenticationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetMinimumTlsVersion` <a name="resetMinimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetMinimumTlsVersion"></a>

```java
public void resetMinimumTlsVersion()
```

##### `resetNonSslPortEnabled` <a name="resetNonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetNonSslPortEnabled"></a>

```java
public void resetNonSslPortEnabled()
```

##### `resetPatchSchedule` <a name="resetPatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPatchSchedule"></a>

```java
public void resetPatchSchedule()
```

##### `resetPrivateStaticIpAddress` <a name="resetPrivateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPrivateStaticIpAddress"></a>

```java
public void resetPrivateStaticIpAddress()
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetPublicNetworkAccessEnabled"></a>

```java
public void resetPublicNetworkAccessEnabled()
```

##### `resetRedisConfiguration` <a name="resetRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisConfiguration"></a>

```java
public void resetRedisConfiguration()
```

##### `resetRedisVersion` <a name="resetRedisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetRedisVersion"></a>

```java
public void resetRedisVersion()
```

##### `resetReplicasPerMaster` <a name="resetReplicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerMaster"></a>

```java
public void resetReplicasPerMaster()
```

##### `resetReplicasPerPrimary` <a name="resetReplicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetReplicasPerPrimary"></a>

```java
public void resetReplicasPerPrimary()
```

##### `resetShardCount` <a name="resetShardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetShardCount"></a>

```java
public void resetShardCount()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTags"></a>

```java
public void resetTags()
```

##### `resetTenantSettings` <a name="resetTenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTenantSettings"></a>

```java
public void resetTenantSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-azurerm.redisCache.RedisCache.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redisCache.RedisCache.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCache;

RedisCache.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCache;

RedisCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCache;

RedisCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisCache.RedisCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCache;

RedisCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedisCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a RedisCache resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedisCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedisCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the RedisCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule">patchSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString">primaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort">sslPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabledInput">accessKeysAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput">capacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput">familyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput">minimumTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabledInput">nonSslPortEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput">patchScheduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput">privateStaticIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput">redisConfigurationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput">redisVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput">replicasPerMasterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput">replicasPerPrimaryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput">shardCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput">skuNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput">tenantSettingsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.family">family</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabled">nonSslPortEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion">redisVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster">replicasPerMaster</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary">replicasPerPrimary</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName">skuName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings">tenantSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identity"></a>

```java
public RedisCacheIdentityOutputReference getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference">RedisCacheIdentityOutputReference</a>

---

##### `patchSchedule`<sup>Required</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchSchedule"></a>

```java
public RedisCachePatchScheduleList getPatchSchedule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList">RedisCachePatchScheduleList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.primaryConnectionString"></a>

```java
public java.lang.String getPrimaryConnectionString();
```

- *Type:* java.lang.String

---

##### `redisConfiguration`<sup>Required</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfiguration"></a>

```java
public RedisCacheRedisConfigurationOutputReference getRedisConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference">RedisCacheRedisConfigurationOutputReference</a>

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.secondaryConnectionString"></a>

```java
public java.lang.String getSecondaryConnectionString();
```

- *Type:* java.lang.String

---

##### `sslPort`<sup>Required</sup> <a name="sslPort" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.sslPort"></a>

```java
public java.lang.Number getSslPort();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeouts"></a>

```java
public RedisCacheTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference">RedisCacheTimeoutsOutputReference</a>

---

##### `accessKeysAuthenticationEnabledInput`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacityInput"></a>

```java
public java.lang.Number getCapacityInput();
```

- *Type:* java.lang.Number

---

##### `familyInput`<sup>Optional</sup> <a name="familyInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.familyInput"></a>

```java
public java.lang.String getFamilyInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.identityInput"></a>

```java
public RedisCacheIdentity getIdentityInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersionInput`<sup>Optional</sup> <a name="minimumTlsVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersionInput"></a>

```java
public java.lang.String getMinimumTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nonSslPortEnabledInput`<sup>Optional</sup> <a name="nonSslPortEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getNonSslPortEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `patchScheduleInput`<sup>Optional</sup> <a name="patchScheduleInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.patchScheduleInput"></a>

```java
public IResolvable|java.util.List<RedisCachePatchSchedule> getPatchScheduleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>>

---

##### `privateStaticIpAddressInput`<sup>Optional</sup> <a name="privateStaticIpAddressInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddressInput"></a>

```java
public java.lang.String getPrivateStaticIpAddressInput();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `redisConfigurationInput`<sup>Optional</sup> <a name="redisConfigurationInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisConfigurationInput"></a>

```java
public RedisCacheRedisConfiguration getRedisConfigurationInput();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---

##### `redisVersionInput`<sup>Optional</sup> <a name="redisVersionInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersionInput"></a>

```java
public java.lang.String getRedisVersionInput();
```

- *Type:* java.lang.String

---

##### `replicasPerMasterInput`<sup>Optional</sup> <a name="replicasPerMasterInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMasterInput"></a>

```java
public java.lang.Number getReplicasPerMasterInput();
```

- *Type:* java.lang.Number

---

##### `replicasPerPrimaryInput`<sup>Optional</sup> <a name="replicasPerPrimaryInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimaryInput"></a>

```java
public java.lang.Number getReplicasPerPrimaryInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `shardCountInput`<sup>Optional</sup> <a name="shardCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCountInput"></a>

```java
public java.lang.Number getShardCountInput();
```

- *Type:* java.lang.Number

---

##### `skuNameInput`<sup>Optional</sup> <a name="skuNameInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuNameInput"></a>

```java
public java.lang.String getSkuNameInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantSettingsInput`<sup>Optional</sup> <a name="tenantSettingsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettingsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTenantSettingsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.timeoutsInput"></a>

```java
public IResolvable|RedisCacheTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessKeysAuthenticationEnabled`<sup>Required</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.accessKeysAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `minimumTlsVersion`<sup>Required</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nonSslPortEnabled`<sup>Required</sup> <a name="nonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.nonSslPortEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNonSslPortEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `privateStaticIpAddress`<sup>Required</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.privateStaticIpAddress"></a>

```java
public java.lang.String getPrivateStaticIpAddress();
```

- *Type:* java.lang.String

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `redisVersion`<sup>Required</sup> <a name="redisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.redisVersion"></a>

```java
public java.lang.String getRedisVersion();
```

- *Type:* java.lang.String

---

##### `replicasPerMaster`<sup>Required</sup> <a name="replicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerMaster"></a>

```java
public java.lang.Number getReplicasPerMaster();
```

- *Type:* java.lang.Number

---

##### `replicasPerPrimary`<sup>Required</sup> <a name="replicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.replicasPerPrimary"></a>

```java
public java.lang.Number getReplicasPerPrimary();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `shardCount`<sup>Required</sup> <a name="shardCount" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tenantSettings`<sup>Required</sup> <a name="tenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tenantSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTenantSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisCache.RedisCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisCacheConfig <a name="RedisCacheConfig" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheConfig;

RedisCacheConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .capacity(java.lang.Number)
    .family(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .skuName(java.lang.String)
//  .accessKeysAuthenticationEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identity(RedisCacheIdentity)
//  .minimumTlsVersion(java.lang.String)
//  .nonSslPortEnabled(java.lang.Boolean|IResolvable)
//  .patchSchedule(IResolvable|java.util.List<RedisCachePatchSchedule>)
//  .privateStaticIpAddress(java.lang.String)
//  .publicNetworkAccessEnabled(java.lang.Boolean|IResolvable)
//  .redisConfiguration(RedisCacheRedisConfiguration)
//  .redisVersion(java.lang.String)
//  .replicasPerMaster(java.lang.Number)
//  .replicasPerPrimary(java.lang.Number)
//  .shardCount(java.lang.Number)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tenantSettings(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(RedisCacheTimeouts)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#capacity RedisCache#capacity}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family">family</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#family RedisCache#family}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#location RedisCache#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#name RedisCache#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName">skuName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.accessKeysAuthenticationEnabled">accessKeysAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#id RedisCache#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion">minimumTlsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.nonSslPortEnabled">nonSslPortEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule">patchSchedule</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>></code> | patch_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress">privateStaticIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration">redisConfiguration</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | redis_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion">redisVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster">replicasPerMaster</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary">replicasPerPrimary</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount">shardCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tags RedisCache#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings">tenantSettings</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#zones RedisCache#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#capacity RedisCache#capacity}.

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.family"></a>

```java
public java.lang.String getFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#family RedisCache#family}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#location RedisCache#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#name RedisCache#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#resource_group_name RedisCache#resource_group_name}.

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.skuName"></a>

```java
public java.lang.String getSkuName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#sku_name RedisCache#sku_name}.

---

##### `accessKeysAuthenticationEnabled`<sup>Optional</sup> <a name="accessKeysAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.accessKeysAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAccessKeysAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#access_keys_authentication_enabled RedisCache#access_keys_authentication_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#id RedisCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.identity"></a>

```java
public RedisCacheIdentity getIdentity();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#identity RedisCache#identity}

---

##### `minimumTlsVersion`<sup>Optional</sup> <a name="minimumTlsVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.minimumTlsVersion"></a>

```java
public java.lang.String getMinimumTlsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#minimum_tls_version RedisCache#minimum_tls_version}.

---

##### `nonSslPortEnabled`<sup>Optional</sup> <a name="nonSslPortEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.nonSslPortEnabled"></a>

```java
public java.lang.Boolean|IResolvable getNonSslPortEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#non_ssl_port_enabled RedisCache#non_ssl_port_enabled}.

---

##### `patchSchedule`<sup>Optional</sup> <a name="patchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.patchSchedule"></a>

```java
public IResolvable|java.util.List<RedisCachePatchSchedule> getPatchSchedule();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>>

patch_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#patch_schedule RedisCache#patch_schedule}

---

##### `privateStaticIpAddress`<sup>Optional</sup> <a name="privateStaticIpAddress" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.privateStaticIpAddress"></a>

```java
public java.lang.String getPrivateStaticIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#private_static_ip_address RedisCache#private_static_ip_address}.

---

##### `publicNetworkAccessEnabled`<sup>Optional</sup> <a name="publicNetworkAccessEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.publicNetworkAccessEnabled"></a>

```java
public java.lang.Boolean|IResolvable getPublicNetworkAccessEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#public_network_access_enabled RedisCache#public_network_access_enabled}.

---

##### `redisConfiguration`<sup>Optional</sup> <a name="redisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisConfiguration"></a>

```java
public RedisCacheRedisConfiguration getRedisConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

redis_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_configuration RedisCache#redis_configuration}

---

##### `redisVersion`<sup>Optional</sup> <a name="redisVersion" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.redisVersion"></a>

```java
public java.lang.String getRedisVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#redis_version RedisCache#redis_version}.

---

##### `replicasPerMaster`<sup>Optional</sup> <a name="replicasPerMaster" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerMaster"></a>

```java
public java.lang.Number getReplicasPerMaster();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_master RedisCache#replicas_per_master}.

---

##### `replicasPerPrimary`<sup>Optional</sup> <a name="replicasPerPrimary" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.replicasPerPrimary"></a>

```java
public java.lang.Number getReplicasPerPrimary();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#replicas_per_primary RedisCache#replicas_per_primary}.

---

##### `shardCount`<sup>Optional</sup> <a name="shardCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.shardCount"></a>

```java
public java.lang.Number getShardCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#shard_count RedisCache#shard_count}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#subnet_id RedisCache#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tags RedisCache#tags}.

---

##### `tenantSettings`<sup>Optional</sup> <a name="tenantSettings" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.tenantSettings"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTenantSettings();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#tenant_settings RedisCache#tenant_settings}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.timeouts"></a>

```java
public RedisCacheTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#timeouts RedisCache#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisCache.RedisCacheConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#zones RedisCache#zones}.

---

### RedisCacheIdentity <a name="RedisCacheIdentity" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheIdentity;

RedisCacheIdentity.builder()
    .type(java.lang.String)
//  .identityIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#type RedisCache#type}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#type RedisCache#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentity.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#identity_ids RedisCache#identity_ids}.

---

### RedisCachePatchSchedule <a name="RedisCachePatchSchedule" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCachePatchSchedule;

RedisCachePatchSchedule.builder()
    .dayOfWeek(java.lang.String)
//  .maintenanceWindow(java.lang.String)
//  .startHourUtc(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc">startHourUtc</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#day_of_week RedisCache#day_of_week}.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maintenance_window RedisCache#maintenance_window}.

---

##### `startHourUtc`<sup>Optional</sup> <a name="startHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule.property.startHourUtc"></a>

```java
public java.lang.Number getStartHourUtc();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#start_hour_utc RedisCache#start_hour_utc}.

---

### RedisCacheRedisConfiguration <a name="RedisCacheRedisConfiguration" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheRedisConfiguration;

RedisCacheRedisConfiguration.builder()
//  .activeDirectoryAuthenticationEnabled(java.lang.Boolean|IResolvable)
//  .aofBackupEnabled(java.lang.Boolean|IResolvable)
//  .aofStorageConnectionString0(java.lang.String)
//  .aofStorageConnectionString1(java.lang.String)
//  .authenticationEnabled(java.lang.Boolean|IResolvable)
//  .dataPersistenceAuthenticationMethod(java.lang.String)
//  .maxfragmentationmemoryReserved(java.lang.Number)
//  .maxmemoryDelta(java.lang.Number)
//  .maxmemoryPolicy(java.lang.String)
//  .maxmemoryReserved(java.lang.Number)
//  .notifyKeyspaceEvents(java.lang.String)
//  .rdbBackupEnabled(java.lang.Boolean|IResolvable)
//  .rdbBackupFrequency(java.lang.Number)
//  .rdbBackupMaxSnapshotCount(java.lang.Number)
//  .rdbStorageConnectionString(java.lang.String)
//  .storageAccountSubscriptionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled">activeDirectoryAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled">aofBackupEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0">aofStorageConnectionString0</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1">aofStorageConnectionString1</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.authenticationEnabled">authenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#authentication_enabled RedisCache#authentication_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod">dataPersistenceAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved">maxfragmentationmemoryReserved</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta">maxmemoryDelta</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved">maxmemoryReserved</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled">rdbBackupEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency">rdbBackupFrequency</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount">rdbBackupMaxSnapshotCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString">rdbStorageConnectionString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId">storageAccountSubscriptionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}. |

---

##### `activeDirectoryAuthenticationEnabled`<sup>Optional</sup> <a name="activeDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.activeDirectoryAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActiveDirectoryAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#active_directory_authentication_enabled RedisCache#active_directory_authentication_enabled}.

---

##### `aofBackupEnabled`<sup>Optional</sup> <a name="aofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAofBackupEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_backup_enabled RedisCache#aof_backup_enabled}.

---

##### `aofStorageConnectionString0`<sup>Optional</sup> <a name="aofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString0"></a>

```java
public java.lang.String getAofStorageConnectionString0();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_storage_connection_string_0 RedisCache#aof_storage_connection_string_0}.

---

##### `aofStorageConnectionString1`<sup>Optional</sup> <a name="aofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.aofStorageConnectionString1"></a>

```java
public java.lang.String getAofStorageConnectionString1();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#aof_storage_connection_string_1 RedisCache#aof_storage_connection_string_1}.

---

##### `authenticationEnabled`<sup>Optional</sup> <a name="authenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.authenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#authentication_enabled RedisCache#authentication_enabled}.

---

##### `dataPersistenceAuthenticationMethod`<sup>Optional</sup> <a name="dataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.dataPersistenceAuthenticationMethod"></a>

```java
public java.lang.String getDataPersistenceAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#data_persistence_authentication_method RedisCache#data_persistence_authentication_method}.

---

##### `maxfragmentationmemoryReserved`<sup>Optional</sup> <a name="maxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxfragmentationmemoryReserved"></a>

```java
public java.lang.Number getMaxfragmentationmemoryReserved();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxfragmentationmemory_reserved RedisCache#maxfragmentationmemory_reserved}.

---

##### `maxmemoryDelta`<sup>Optional</sup> <a name="maxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryDelta"></a>

```java
public java.lang.Number getMaxmemoryDelta();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_delta RedisCache#maxmemory_delta}.

---

##### `maxmemoryPolicy`<sup>Optional</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryPolicy"></a>

```java
public java.lang.String getMaxmemoryPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_policy RedisCache#maxmemory_policy}.

---

##### `maxmemoryReserved`<sup>Optional</sup> <a name="maxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.maxmemoryReserved"></a>

```java
public java.lang.Number getMaxmemoryReserved();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#maxmemory_reserved RedisCache#maxmemory_reserved}.

---

##### `notifyKeyspaceEvents`<sup>Optional</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#notify_keyspace_events RedisCache#notify_keyspace_events}.

---

##### `rdbBackupEnabled`<sup>Optional</sup> <a name="rdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRdbBackupEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_enabled RedisCache#rdb_backup_enabled}.

---

##### `rdbBackupFrequency`<sup>Optional</sup> <a name="rdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupFrequency"></a>

```java
public java.lang.Number getRdbBackupFrequency();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_frequency RedisCache#rdb_backup_frequency}.

---

##### `rdbBackupMaxSnapshotCount`<sup>Optional</sup> <a name="rdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbBackupMaxSnapshotCount"></a>

```java
public java.lang.Number getRdbBackupMaxSnapshotCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_backup_max_snapshot_count RedisCache#rdb_backup_max_snapshot_count}.

---

##### `rdbStorageConnectionString`<sup>Optional</sup> <a name="rdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.rdbStorageConnectionString"></a>

```java
public java.lang.String getRdbStorageConnectionString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#rdb_storage_connection_string RedisCache#rdb_storage_connection_string}.

---

##### `storageAccountSubscriptionId`<sup>Optional</sup> <a name="storageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration.property.storageAccountSubscriptionId"></a>

```java
public java.lang.String getStorageAccountSubscriptionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#storage_account_subscription_id RedisCache#storage_account_subscription_id}.

---

### RedisCacheTimeouts <a name="RedisCacheTimeouts" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheTimeouts;

RedisCacheTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#create RedisCache#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#delete RedisCache#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#read RedisCache#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#update RedisCache#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#create RedisCache#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#delete RedisCache#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#read RedisCache#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/redis_cache#update RedisCache#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisCacheIdentityOutputReference <a name="RedisCacheIdentityOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheIdentityOutputReference;

new RedisCacheIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.resetIdentityIds"></a>

```java
public void resetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIdsInput"></a>

```java
public java.util.List<java.lang.String> getIdentityIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.identityIds"></a>

```java
public java.util.List<java.lang.String> getIdentityIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheIdentityOutputReference.property.internalValue"></a>

```java
public RedisCacheIdentity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheIdentity">RedisCacheIdentity</a>

---


### RedisCachePatchScheduleList <a name="RedisCachePatchScheduleList" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCachePatchScheduleList;

new RedisCachePatchScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get"></a>

```java
public RedisCachePatchScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RedisCachePatchSchedule> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>>

---


### RedisCachePatchScheduleOutputReference <a name="RedisCachePatchScheduleOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCachePatchScheduleOutputReference;

new RedisCachePatchScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc">resetStartHourUtc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetStartHourUtc` <a name="resetStartHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.resetStartHourUtc"></a>

```java
public void resetStartHourUtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput">startHourUtcInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc">startHourUtc</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindowInput"></a>

```java
public java.lang.String getMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `startHourUtcInput`<sup>Optional</sup> <a name="startHourUtcInput" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtcInput"></a>

```java
public java.lang.Number getStartHourUtcInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.maintenanceWindow"></a>

```java
public java.lang.String getMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `startHourUtc`<sup>Required</sup> <a name="startHourUtc" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.startHourUtc"></a>

```java
public java.lang.Number getStartHourUtc();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCachePatchScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisCachePatchSchedule getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.redisCache.RedisCachePatchSchedule">RedisCachePatchSchedule</a>

---


### RedisCacheRedisConfigurationOutputReference <a name="RedisCacheRedisConfigurationOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheRedisConfigurationOutputReference;

new RedisCacheRedisConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled">resetActiveDirectoryAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled">resetAofBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0">resetAofStorageConnectionString0</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1">resetAofStorageConnectionString1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAuthenticationEnabled">resetAuthenticationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod">resetDataPersistenceAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved">resetMaxfragmentationmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta">resetMaxmemoryDelta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy">resetMaxmemoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved">resetMaxmemoryReserved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents">resetNotifyKeyspaceEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled">resetRdbBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency">resetRdbBackupFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount">resetRdbBackupMaxSnapshotCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString">resetRdbStorageConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId">resetStorageAccountSubscriptionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveDirectoryAuthenticationEnabled` <a name="resetActiveDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetActiveDirectoryAuthenticationEnabled"></a>

```java
public void resetActiveDirectoryAuthenticationEnabled()
```

##### `resetAofBackupEnabled` <a name="resetAofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofBackupEnabled"></a>

```java
public void resetAofBackupEnabled()
```

##### `resetAofStorageConnectionString0` <a name="resetAofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString0"></a>

```java
public void resetAofStorageConnectionString0()
```

##### `resetAofStorageConnectionString1` <a name="resetAofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAofStorageConnectionString1"></a>

```java
public void resetAofStorageConnectionString1()
```

##### `resetAuthenticationEnabled` <a name="resetAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetAuthenticationEnabled"></a>

```java
public void resetAuthenticationEnabled()
```

##### `resetDataPersistenceAuthenticationMethod` <a name="resetDataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetDataPersistenceAuthenticationMethod"></a>

```java
public void resetDataPersistenceAuthenticationMethod()
```

##### `resetMaxfragmentationmemoryReserved` <a name="resetMaxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxfragmentationmemoryReserved"></a>

```java
public void resetMaxfragmentationmemoryReserved()
```

##### `resetMaxmemoryDelta` <a name="resetMaxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryDelta"></a>

```java
public void resetMaxmemoryDelta()
```

##### `resetMaxmemoryPolicy` <a name="resetMaxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryPolicy"></a>

```java
public void resetMaxmemoryPolicy()
```

##### `resetMaxmemoryReserved` <a name="resetMaxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetMaxmemoryReserved"></a>

```java
public void resetMaxmemoryReserved()
```

##### `resetNotifyKeyspaceEvents` <a name="resetNotifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetNotifyKeyspaceEvents"></a>

```java
public void resetNotifyKeyspaceEvents()
```

##### `resetRdbBackupEnabled` <a name="resetRdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupEnabled"></a>

```java
public void resetRdbBackupEnabled()
```

##### `resetRdbBackupFrequency` <a name="resetRdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupFrequency"></a>

```java
public void resetRdbBackupFrequency()
```

##### `resetRdbBackupMaxSnapshotCount` <a name="resetRdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbBackupMaxSnapshotCount"></a>

```java
public void resetRdbBackupMaxSnapshotCount()
```

##### `resetRdbStorageConnectionString` <a name="resetRdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetRdbStorageConnectionString"></a>

```java
public void resetRdbStorageConnectionString()
```

##### `resetStorageAccountSubscriptionId` <a name="resetStorageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.resetStorageAccountSubscriptionId"></a>

```java
public void resetStorageAccountSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients">maxclients</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput">activeDirectoryAuthenticationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput">aofBackupEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input">aofStorageConnectionString0Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input">aofStorageConnectionString1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabledInput">authenticationEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput">dataPersistenceAuthenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput">maxfragmentationmemoryReservedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput">maxmemoryDeltaInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput">maxmemoryPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput">maxmemoryReservedInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput">notifyKeyspaceEventsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput">rdbBackupEnabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput">rdbBackupFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput">rdbBackupMaxSnapshotCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput">rdbStorageConnectionStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput">storageAccountSubscriptionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled">activeDirectoryAuthenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled">aofBackupEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0">aofStorageConnectionString0</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1">aofStorageConnectionString1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabled">authenticationEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod">dataPersistenceAuthenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved">maxfragmentationmemoryReserved</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta">maxmemoryDelta</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy">maxmemoryPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved">maxmemoryReserved</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents">notifyKeyspaceEvents</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled">rdbBackupEnabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency">rdbBackupFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount">rdbBackupMaxSnapshotCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString">rdbStorageConnectionString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId">storageAccountSubscriptionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxclients`<sup>Required</sup> <a name="maxclients" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxclients"></a>

```java
public java.lang.Number getMaxclients();
```

- *Type:* java.lang.Number

---

##### `activeDirectoryAuthenticationEnabledInput`<sup>Optional</sup> <a name="activeDirectoryAuthenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getActiveDirectoryAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `aofBackupEnabledInput`<sup>Optional</sup> <a name="aofBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAofBackupEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `aofStorageConnectionString0Input`<sup>Optional</sup> <a name="aofStorageConnectionString0Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0Input"></a>

```java
public java.lang.String getAofStorageConnectionString0Input();
```

- *Type:* java.lang.String

---

##### `aofStorageConnectionString1Input`<sup>Optional</sup> <a name="aofStorageConnectionString1Input" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1Input"></a>

```java
public java.lang.String getAofStorageConnectionString1Input();
```

- *Type:* java.lang.String

---

##### `authenticationEnabledInput`<sup>Optional</sup> <a name="authenticationEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAuthenticationEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dataPersistenceAuthenticationMethodInput`<sup>Optional</sup> <a name="dataPersistenceAuthenticationMethodInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethodInput"></a>

```java
public java.lang.String getDataPersistenceAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `maxfragmentationmemoryReservedInput`<sup>Optional</sup> <a name="maxfragmentationmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReservedInput"></a>

```java
public java.lang.Number getMaxfragmentationmemoryReservedInput();
```

- *Type:* java.lang.Number

---

##### `maxmemoryDeltaInput`<sup>Optional</sup> <a name="maxmemoryDeltaInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDeltaInput"></a>

```java
public java.lang.Number getMaxmemoryDeltaInput();
```

- *Type:* java.lang.Number

---

##### `maxmemoryPolicyInput`<sup>Optional</sup> <a name="maxmemoryPolicyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicyInput"></a>

```java
public java.lang.String getMaxmemoryPolicyInput();
```

- *Type:* java.lang.String

---

##### `maxmemoryReservedInput`<sup>Optional</sup> <a name="maxmemoryReservedInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReservedInput"></a>

```java
public java.lang.Number getMaxmemoryReservedInput();
```

- *Type:* java.lang.Number

---

##### `notifyKeyspaceEventsInput`<sup>Optional</sup> <a name="notifyKeyspaceEventsInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEventsInput"></a>

```java
public java.lang.String getNotifyKeyspaceEventsInput();
```

- *Type:* java.lang.String

---

##### `rdbBackupEnabledInput`<sup>Optional</sup> <a name="rdbBackupEnabledInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRdbBackupEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rdbBackupFrequencyInput`<sup>Optional</sup> <a name="rdbBackupFrequencyInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequencyInput"></a>

```java
public java.lang.Number getRdbBackupFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `rdbBackupMaxSnapshotCountInput`<sup>Optional</sup> <a name="rdbBackupMaxSnapshotCountInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCountInput"></a>

```java
public java.lang.Number getRdbBackupMaxSnapshotCountInput();
```

- *Type:* java.lang.Number

---

##### `rdbStorageConnectionStringInput`<sup>Optional</sup> <a name="rdbStorageConnectionStringInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionStringInput"></a>

```java
public java.lang.String getRdbStorageConnectionStringInput();
```

- *Type:* java.lang.String

---

##### `storageAccountSubscriptionIdInput`<sup>Optional</sup> <a name="storageAccountSubscriptionIdInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionIdInput"></a>

```java
public java.lang.String getStorageAccountSubscriptionIdInput();
```

- *Type:* java.lang.String

---

##### `activeDirectoryAuthenticationEnabled`<sup>Required</sup> <a name="activeDirectoryAuthenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.activeDirectoryAuthenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getActiveDirectoryAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `aofBackupEnabled`<sup>Required</sup> <a name="aofBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAofBackupEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `aofStorageConnectionString0`<sup>Required</sup> <a name="aofStorageConnectionString0" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString0"></a>

```java
public java.lang.String getAofStorageConnectionString0();
```

- *Type:* java.lang.String

---

##### `aofStorageConnectionString1`<sup>Required</sup> <a name="aofStorageConnectionString1" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.aofStorageConnectionString1"></a>

```java
public java.lang.String getAofStorageConnectionString1();
```

- *Type:* java.lang.String

---

##### `authenticationEnabled`<sup>Required</sup> <a name="authenticationEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.authenticationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAuthenticationEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `dataPersistenceAuthenticationMethod`<sup>Required</sup> <a name="dataPersistenceAuthenticationMethod" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.dataPersistenceAuthenticationMethod"></a>

```java
public java.lang.String getDataPersistenceAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `maxfragmentationmemoryReserved`<sup>Required</sup> <a name="maxfragmentationmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxfragmentationmemoryReserved"></a>

```java
public java.lang.Number getMaxfragmentationmemoryReserved();
```

- *Type:* java.lang.Number

---

##### `maxmemoryDelta`<sup>Required</sup> <a name="maxmemoryDelta" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryDelta"></a>

```java
public java.lang.Number getMaxmemoryDelta();
```

- *Type:* java.lang.Number

---

##### `maxmemoryPolicy`<sup>Required</sup> <a name="maxmemoryPolicy" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryPolicy"></a>

```java
public java.lang.String getMaxmemoryPolicy();
```

- *Type:* java.lang.String

---

##### `maxmemoryReserved`<sup>Required</sup> <a name="maxmemoryReserved" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.maxmemoryReserved"></a>

```java
public java.lang.Number getMaxmemoryReserved();
```

- *Type:* java.lang.Number

---

##### `notifyKeyspaceEvents`<sup>Required</sup> <a name="notifyKeyspaceEvents" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.notifyKeyspaceEvents"></a>

```java
public java.lang.String getNotifyKeyspaceEvents();
```

- *Type:* java.lang.String

---

##### `rdbBackupEnabled`<sup>Required</sup> <a name="rdbBackupEnabled" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRdbBackupEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `rdbBackupFrequency`<sup>Required</sup> <a name="rdbBackupFrequency" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupFrequency"></a>

```java
public java.lang.Number getRdbBackupFrequency();
```

- *Type:* java.lang.Number

---

##### `rdbBackupMaxSnapshotCount`<sup>Required</sup> <a name="rdbBackupMaxSnapshotCount" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbBackupMaxSnapshotCount"></a>

```java
public java.lang.Number getRdbBackupMaxSnapshotCount();
```

- *Type:* java.lang.Number

---

##### `rdbStorageConnectionString`<sup>Required</sup> <a name="rdbStorageConnectionString" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.rdbStorageConnectionString"></a>

```java
public java.lang.String getRdbStorageConnectionString();
```

- *Type:* java.lang.String

---

##### `storageAccountSubscriptionId`<sup>Required</sup> <a name="storageAccountSubscriptionId" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.storageAccountSubscriptionId"></a>

```java
public java.lang.String getStorageAccountSubscriptionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfigurationOutputReference.property.internalValue"></a>

```java
public RedisCacheRedisConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisCache.RedisCacheRedisConfiguration">RedisCacheRedisConfiguration</a>

---


### RedisCacheTimeoutsOutputReference <a name="RedisCacheTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_cache.RedisCacheTimeoutsOutputReference;

new RedisCacheTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisCache.RedisCacheTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|RedisCacheTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.redisCache.RedisCacheTimeouts">RedisCacheTimeouts</a>

---



