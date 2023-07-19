# `azurerm_redis_enterprise_database`

Refer to the Terraform Registory for docs: [`azurerm_redis_enterprise_database`](https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database).

# `redisEnterpriseDatabase` Submodule <a name="`redisEnterpriseDatabase` Submodule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisEnterpriseDatabase <a name="RedisEnterpriseDatabase" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database azurerm_redis_enterprise_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabase;

RedisEnterpriseDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .clusterId(java.lang.String)
//  .clientProtocol(java.lang.String)
//  .clusteringPolicy(java.lang.String)
//  .evictionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .linkedDatabaseGroupNickname(java.lang.String)
//  .linkedDatabaseId(java.util.List<java.lang.String>)
//  .module(IResolvable)
//  .module(java.util.List<RedisEnterpriseDatabaseModule>)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .resourceGroupName(java.lang.String)
//  .timeouts(RedisEnterpriseDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusteringPolicy">clusteringPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseGroupNickname">linkedDatabaseGroupNickname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseId">linkedDatabaseId</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.module">module</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>></code> | module block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clientProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}.

---

##### `clusteringPolicy`<sup>Optional</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusteringPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.evictionPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkedDatabaseGroupNickname`<sup>Optional</sup> <a name="linkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseGroupNickname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}.

---

##### `linkedDatabaseId`<sup>Optional</sup> <a name="linkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseId"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.module"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>>

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule">putModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol">resetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy">resetClusteringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy">resetEvictionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname">resetLinkedDatabaseGroupNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId">resetLinkedDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule">resetModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putModule` <a name="putModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule"></a>

```java
public void putModule(IResolvable OR java.util.List<RedisEnterpriseDatabaseModule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts"></a>

```java
public void putTimeouts(RedisEnterpriseDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

---

##### `resetClientProtocol` <a name="resetClientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol"></a>

```java
public void resetClientProtocol()
```

##### `resetClusteringPolicy` <a name="resetClusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy"></a>

```java
public void resetClusteringPolicy()
```

##### `resetEvictionPolicy` <a name="resetEvictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy"></a>

```java
public void resetEvictionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetLinkedDatabaseGroupNickname` <a name="resetLinkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname"></a>

```java
public void resetLinkedDatabaseGroupNickname()
```

##### `resetLinkedDatabaseId` <a name="resetLinkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId"></a>

```java
public void resetLinkedDatabaseId()
```

##### `resetModule` <a name="resetModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule"></a>

```java
public void resetModule()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName"></a>

```java
public void resetName()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort"></a>

```java
public void resetPort()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabase;

RedisEnterpriseDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabase;

RedisEnterpriseDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabase;

RedisEnterpriseDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module">module</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey">primaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput">clientProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput">clusteringPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput">linkedDatabaseGroupNicknameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput">linkedDatabaseIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput">moduleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy">clusteringPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname">linkedDatabaseGroupNickname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId">linkedDatabaseId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module"></a>

```java
public RedisEnterpriseDatabaseModuleList getModule();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a>

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey"></a>

```java
public java.lang.String getPrimaryAccessKey();
```

- *Type:* java.lang.String

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey"></a>

```java
public java.lang.String getSecondaryAccessKey();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts"></a>

```java
public RedisEnterpriseDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a>

---

##### `clientProtocolInput`<sup>Optional</sup> <a name="clientProtocolInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput"></a>

```java
public java.lang.String getClientProtocolInput();
```

- *Type:* java.lang.String

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `clusteringPolicyInput`<sup>Optional</sup> <a name="clusteringPolicyInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput"></a>

```java
public java.lang.String getClusteringPolicyInput();
```

- *Type:* java.lang.String

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput"></a>

```java
public java.lang.String getEvictionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `linkedDatabaseGroupNicknameInput`<sup>Optional</sup> <a name="linkedDatabaseGroupNicknameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput"></a>

```java
public java.lang.String getLinkedDatabaseGroupNicknameInput();
```

- *Type:* java.lang.String

---

##### `linkedDatabaseIdInput`<sup>Optional</sup> <a name="linkedDatabaseIdInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput"></a>

```java
public java.util.List<java.lang.String> getLinkedDatabaseIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `moduleInput`<sup>Optional</sup> <a name="moduleInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput"></a>

```java
public java.lang.Object getModuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

---

##### `clientProtocol`<sup>Required</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `clusteringPolicy`<sup>Required</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy"></a>

```java
public java.lang.String getClusteringPolicy();
```

- *Type:* java.lang.String

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `linkedDatabaseGroupNickname`<sup>Required</sup> <a name="linkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname"></a>

```java
public java.lang.String getLinkedDatabaseGroupNickname();
```

- *Type:* java.lang.String

---

##### `linkedDatabaseId`<sup>Required</sup> <a name="linkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId"></a>

```java
public java.util.List<java.lang.String> getLinkedDatabaseId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedisEnterpriseDatabaseConfig <a name="RedisEnterpriseDatabaseConfig" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseConfig;

RedisEnterpriseDatabaseConfig.builder()
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
    .clusterId(java.lang.String)
//  .clientProtocol(java.lang.String)
//  .clusteringPolicy(java.lang.String)
//  .evictionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .linkedDatabaseGroupNickname(java.lang.String)
//  .linkedDatabaseId(java.util.List<java.lang.String>)
//  .module(IResolvable)
//  .module(java.util.List<RedisEnterpriseDatabaseModule>)
//  .name(java.lang.String)
//  .port(java.lang.Number)
//  .resourceGroupName(java.lang.String)
//  .timeouts(RedisEnterpriseDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol">clientProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy">clusteringPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname">linkedDatabaseGroupNickname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId">linkedDatabaseId</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module">module</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>></code> | module block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}.

---

##### `clientProtocol`<sup>Optional</sup> <a name="clientProtocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol"></a>

```java
public java.lang.String getClientProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}.

---

##### `clusteringPolicy`<sup>Optional</sup> <a name="clusteringPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy"></a>

```java
public java.lang.String getClusteringPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}.

---

##### `evictionPolicy`<sup>Optional</sup> <a name="evictionPolicy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy"></a>

```java
public java.lang.String getEvictionPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linkedDatabaseGroupNickname`<sup>Optional</sup> <a name="linkedDatabaseGroupNickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname"></a>

```java
public java.lang.String getLinkedDatabaseGroupNickname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}.

---

##### `linkedDatabaseId`<sup>Optional</sup> <a name="linkedDatabaseId" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId"></a>

```java
public java.util.List<java.lang.String> getLinkedDatabaseId();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module"></a>

```java
public java.lang.Object getModule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>>

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts"></a>

```java
public RedisEnterpriseDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}

---

### RedisEnterpriseDatabaseModule <a name="RedisEnterpriseDatabaseModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseModule;

RedisEnterpriseDatabaseModule.builder()
    .name(java.lang.String)
//  .args(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args">args</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}.

---

### RedisEnterpriseDatabaseTimeouts <a name="RedisEnterpriseDatabaseTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseTimeouts;

RedisEnterpriseDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.65.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisEnterpriseDatabaseModuleList <a name="RedisEnterpriseDatabaseModuleList" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseModuleList;

new RedisEnterpriseDatabaseModuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get"></a>

```java
public RedisEnterpriseDatabaseModuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>>

---


### RedisEnterpriseDatabaseModuleOutputReference <a name="RedisEnterpriseDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseModuleOutputReference;

new RedisEnterpriseDatabaseModuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs"></a>

```java
public void resetArgs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput">argsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args">args</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput"></a>

```java
public java.lang.String getArgsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args"></a>

```java
public java.lang.String getArgs();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>

---


### RedisEnterpriseDatabaseTimeoutsOutputReference <a name="RedisEnterpriseDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurerm.redis_enterprise_database.RedisEnterpriseDatabaseTimeoutsOutputReference;

new RedisEnterpriseDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

---



