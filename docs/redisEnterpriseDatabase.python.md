# `azurerm_redis_enterprise_database`

Refer to the Terraform Registory for docs: [`azurerm_redis_enterprise_database`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database).

# `redisEnterpriseDatabase` Submodule <a name="`redisEnterpriseDatabase` Submodule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisEnterpriseDatabase <a name="RedisEnterpriseDatabase" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database azurerm_redis_enterprise_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  client_protocol: str = None,
  clustering_policy: str = None,
  eviction_policy: str = None,
  id: str = None,
  linked_database_group_nickname: str = None,
  linked_database_id: typing.List[str] = None,
  module: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]] = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  resource_group_name: str = None,
  timeouts: RedisEnterpriseDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clientProtocol">client_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusteringPolicy">clustering_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseGroupNickname">linked_database_group_nickname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseId">linked_database_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.module">module</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]</code> | module block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}.

---

##### `client_protocol`<sup>Optional</sup> <a name="client_protocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clientProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}.

---

##### `clustering_policy`<sup>Optional</sup> <a name="clustering_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.clusteringPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.evictionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_database_group_nickname`<sup>Optional</sup> <a name="linked_database_group_nickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseGroupNickname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}.

---

##### `linked_database_id`<sup>Optional</sup> <a name="linked_database_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.linkedDatabaseId"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.module"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule">put_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol">reset_client_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy">reset_clustering_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy">reset_eviction_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname">reset_linked_database_group_nickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId">reset_linked_database_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule">reset_module</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName">reset_resource_group_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_module` <a name="put_module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule"></a>

```python
def put_module(
  value: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putModule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}.

---

##### `reset_client_protocol` <a name="reset_client_protocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClientProtocol"></a>

```python
def reset_client_protocol() -> None
```

##### `reset_clustering_policy` <a name="reset_clustering_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetClusteringPolicy"></a>

```python
def reset_clustering_policy() -> None
```

##### `reset_eviction_policy` <a name="reset_eviction_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetEvictionPolicy"></a>

```python
def reset_eviction_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_linked_database_group_nickname` <a name="reset_linked_database_group_nickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseGroupNickname"></a>

```python
def reset_linked_database_group_nickname() -> None
```

##### `reset_linked_database_id` <a name="reset_linked_database_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetLinkedDatabaseId"></a>

```python
def reset_linked_database_id() -> None
```

##### `reset_module` <a name="reset_module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetModule"></a>

```python
def reset_module() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_resource_group_name` <a name="reset_resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetResourceGroupName"></a>

```python
def reset_resource_group_name() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedisEnterpriseDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedisEnterpriseDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisEnterpriseDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisEnterpriseDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisEnterpriseDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module">module</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey">primary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey">secondary_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput">client_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput">clustering_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput">eviction_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput">linked_database_group_nickname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput">linked_database_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput">module_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol">client_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy">clustering_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname">linked_database_group_nickname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId">linked_database_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module`<sup>Required</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.module"></a>

```python
module: RedisEnterpriseDatabaseModuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList">RedisEnterpriseDatabaseModuleList</a>

---

##### `primary_access_key`<sup>Required</sup> <a name="primary_access_key" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.primaryAccessKey"></a>

```python
primary_access_key: str
```

- *Type:* str

---

##### `secondary_access_key`<sup>Required</sup> <a name="secondary_access_key" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.secondaryAccessKey"></a>

```python
secondary_access_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeouts"></a>

```python
timeouts: RedisEnterpriseDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference">RedisEnterpriseDatabaseTimeoutsOutputReference</a>

---

##### `client_protocol_input`<sup>Optional</sup> <a name="client_protocol_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocolInput"></a>

```python
client_protocol_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `clustering_policy_input`<sup>Optional</sup> <a name="clustering_policy_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicyInput"></a>

```python
clustering_policy_input: str
```

- *Type:* str

---

##### `eviction_policy_input`<sup>Optional</sup> <a name="eviction_policy_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicyInput"></a>

```python
eviction_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_database_group_nickname_input`<sup>Optional</sup> <a name="linked_database_group_nickname_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNicknameInput"></a>

```python
linked_database_group_nickname_input: str
```

- *Type:* str

---

##### `linked_database_id_input`<sup>Optional</sup> <a name="linked_database_id_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseIdInput"></a>

```python
linked_database_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `module_input`<sup>Optional</sup> <a name="module_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.moduleInput"></a>

```python
module_input: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedisEnterpriseDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>]

---

##### `client_protocol`<sup>Required</sup> <a name="client_protocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `clustering_policy`<sup>Required</sup> <a name="clustering_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.clusteringPolicy"></a>

```python
clustering_policy: str
```

- *Type:* str

---

##### `eviction_policy`<sup>Required</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_database_group_nickname`<sup>Required</sup> <a name="linked_database_group_nickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseGroupNickname"></a>

```python
linked_database_group_nickname: str
```

- *Type:* str

---

##### `linked_database_id`<sup>Required</sup> <a name="linked_database_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.linkedDatabaseId"></a>

```python
linked_database_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisEnterpriseDatabaseConfig <a name="RedisEnterpriseDatabaseConfig" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  client_protocol: str = None,
  clustering_policy: str = None,
  eviction_policy: str = None,
  id: str = None,
  linked_database_group_nickname: str = None,
  linked_database_id: typing.List[str] = None,
  module: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]] = None,
  name: str = None,
  port: typing.Union[int, float] = None,
  resource_group_name: str = None,
  timeouts: RedisEnterpriseDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol">client_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy">clustering_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy">eviction_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname">linked_database_group_nickname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId">linked_database_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module">module</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]</code> | module block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#cluster_id RedisEnterpriseDatabase#cluster_id}.

---

##### `client_protocol`<sup>Optional</sup> <a name="client_protocol" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clientProtocol"></a>

```python
client_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#client_protocol RedisEnterpriseDatabase#client_protocol}.

---

##### `clustering_policy`<sup>Optional</sup> <a name="clustering_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.clusteringPolicy"></a>

```python
clustering_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#clustering_policy RedisEnterpriseDatabase#clustering_policy}.

---

##### `eviction_policy`<sup>Optional</sup> <a name="eviction_policy" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.evictionPolicy"></a>

```python
eviction_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#eviction_policy RedisEnterpriseDatabase#eviction_policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#id RedisEnterpriseDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_database_group_nickname`<sup>Optional</sup> <a name="linked_database_group_nickname" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseGroupNickname"></a>

```python
linked_database_group_nickname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_group_nickname RedisEnterpriseDatabase#linked_database_group_nickname}.

---

##### `linked_database_id`<sup>Optional</sup> <a name="linked_database_id" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.linkedDatabaseId"></a>

```python
linked_database_id: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#linked_database_id RedisEnterpriseDatabase#linked_database_id}.

---

##### `module`<sup>Optional</sup> <a name="module" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.module"></a>

```python
module: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]

module block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#module RedisEnterpriseDatabase#module}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#port RedisEnterpriseDatabase#port}.

---

##### `resource_group_name`<sup>Optional</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#resource_group_name RedisEnterpriseDatabase#resource_group_name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseConfig.property.timeouts"></a>

```python
timeouts: RedisEnterpriseDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#timeouts RedisEnterpriseDatabase#timeouts}

---

### RedisEnterpriseDatabaseModule <a name="RedisEnterpriseDatabaseModule" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseModule(
  name: str,
  args: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args">args</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#name RedisEnterpriseDatabase#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule.property.args"></a>

```python
args: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#args RedisEnterpriseDatabase#args}.

---

### RedisEnterpriseDatabaseTimeouts <a name="RedisEnterpriseDatabaseTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#create RedisEnterpriseDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#delete RedisEnterpriseDatabase#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#read RedisEnterpriseDatabase#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/redis_enterprise_database#update RedisEnterpriseDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisEnterpriseDatabaseModuleList <a name="RedisEnterpriseDatabaseModuleList" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RedisEnterpriseDatabaseModuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RedisEnterpriseDatabaseModule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]]

---


### RedisEnterpriseDatabaseModuleOutputReference <a name="RedisEnterpriseDatabaseModuleOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs">reset_args</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput">args_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args">args</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.argsInput"></a>

```python
args_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.args"></a>

```python
args: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisEnterpriseDatabaseModule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseModule">RedisEnterpriseDatabaseModule</a>]

---


### RedisEnterpriseDatabaseTimeoutsOutputReference <a name="RedisEnterpriseDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_database

redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisEnterpriseDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseDatabase.RedisEnterpriseDatabaseTimeouts">RedisEnterpriseDatabaseTimeouts</a>]

---



