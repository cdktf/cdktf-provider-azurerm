# `cosmosdbMongoCollection` Submodule <a name="`cosmosdbMongoCollection` Submodule" id="@cdktf/provider-azurerm.cosmosdbMongoCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbMongoCollection <a name="CosmosdbMongoCollection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection azurerm_cosmosdb_mongo_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  database_name: str,
  name: str,
  resource_group_name: str,
  analytical_storage_ttl: typing.Union[int, float] = None,
  autoscale_settings: CosmosdbMongoCollectionAutoscaleSettings = None,
  default_ttl_seconds: typing.Union[int, float] = None,
  id: str = None,
  index: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]] = None,
  shard_key: str = None,
  throughput: typing.Union[int, float] = None,
  timeouts: CosmosdbMongoCollectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.analyticalStorageTtl">analytical_storage_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.autoscaleSettings">autoscale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.defaultTtlSeconds">default_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.index">index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]</code> | index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.shardKey">shard_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}.

---

##### `analytical_storage_ttl`<sup>Optional</sup> <a name="analytical_storage_ttl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.analyticalStorageTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}.

---

##### `autoscale_settings`<sup>Optional</sup> <a name="autoscale_settings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.autoscaleSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#autoscale_settings CosmosdbMongoCollection#autoscale_settings}

---

##### `default_ttl_seconds`<sup>Optional</sup> <a name="default_ttl_seconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.defaultTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.index"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#index CosmosdbMongoCollection#index}

---

##### `shard_key`<sup>Optional</sup> <a name="shard_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.shardKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#timeouts CosmosdbMongoCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings">put_autoscale_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex">put_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl">reset_analytical_storage_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings">reset_autoscale_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds">reset_default_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex">reset_index</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey">reset_shard_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autoscale_settings` <a name="put_autoscale_settings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings"></a>

```python
def put_autoscale_settings(
  max_throughput: typing.Union[int, float] = None
) -> None
```

###### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putAutoscaleSettings.parameter.maxThroughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}.

---

##### `put_index` <a name="put_index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex"></a>

```python
def put_index(
  value: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putIndex.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}.

---

##### `reset_analytical_storage_ttl` <a name="reset_analytical_storage_ttl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAnalyticalStorageTtl"></a>

```python
def reset_analytical_storage_ttl() -> None
```

##### `reset_autoscale_settings` <a name="reset_autoscale_settings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetAutoscaleSettings"></a>

```python
def reset_autoscale_settings() -> None
```

##### `reset_default_ttl_seconds` <a name="reset_default_ttl_seconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetDefaultTtlSeconds"></a>

```python
def reset_default_ttl_seconds() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index` <a name="reset_index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetIndex"></a>

```python
def reset_index() -> None
```

##### `reset_shard_key` <a name="reset_shard_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetShardKey"></a>

```python
def reset_shard_key() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CosmosdbMongoCollection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CosmosdbMongoCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CosmosdbMongoCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CosmosdbMongoCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbMongoCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings">autoscale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index">index</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes">system_indexes</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput">analytical_storage_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput">autoscale_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput">default_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput">index_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput">shard_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl">analytical_storage_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds">default_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey">shard_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscale_settings`<sup>Required</sup> <a name="autoscale_settings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettings"></a>

```python
autoscale_settings: CosmosdbMongoCollectionAutoscaleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference">CosmosdbMongoCollectionAutoscaleSettingsOutputReference</a>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.index"></a>

```python
index: CosmosdbMongoCollectionIndexList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList">CosmosdbMongoCollectionIndexList</a>

---

##### `system_indexes`<sup>Required</sup> <a name="system_indexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.systemIndexes"></a>

```python
system_indexes: CosmosdbMongoCollectionSystemIndexesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList">CosmosdbMongoCollectionSystemIndexesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeouts"></a>

```python
timeouts: CosmosdbMongoCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference">CosmosdbMongoCollectionTimeoutsOutputReference</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `analytical_storage_ttl_input`<sup>Optional</sup> <a name="analytical_storage_ttl_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtlInput"></a>

```python
analytical_storage_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_settings_input`<sup>Optional</sup> <a name="autoscale_settings_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.autoscaleSettingsInput"></a>

```python
autoscale_settings_input: CosmosdbMongoCollectionAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `default_ttl_seconds_input`<sup>Optional</sup> <a name="default_ttl_seconds_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSecondsInput"></a>

```python
default_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.indexInput"></a>

```python
index_input: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `shard_key_input`<sup>Optional</sup> <a name="shard_key_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKeyInput"></a>

```python
shard_key_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CosmosdbMongoCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `analytical_storage_ttl`<sup>Required</sup> <a name="analytical_storage_ttl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.analyticalStorageTtl"></a>

```python
analytical_storage_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `default_ttl_seconds`<sup>Required</sup> <a name="default_ttl_seconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.defaultTtlSeconds"></a>

```python
default_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `shard_key`<sup>Required</sup> <a name="shard_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.shardKey"></a>

```python
shard_key: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbMongoCollectionAutoscaleSettings <a name="CosmosdbMongoCollectionAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings(
  max_throughput: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}. |

---

##### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#max_throughput CosmosdbMongoCollection#max_throughput}.

---

### CosmosdbMongoCollectionConfig <a name="CosmosdbMongoCollectionConfig" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  database_name: str,
  name: str,
  resource_group_name: str,
  analytical_storage_ttl: typing.Union[int, float] = None,
  autoscale_settings: CosmosdbMongoCollectionAutoscaleSettings = None,
  default_ttl_seconds: typing.Union[int, float] = None,
  id: str = None,
  index: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]] = None,
  shard_key: str = None,
  throughput: typing.Union[int, float] = None,
  timeouts: CosmosdbMongoCollectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl">analytical_storage_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings">autoscale_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds">default_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index">index</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]</code> | index block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey">shard_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#account_name CosmosdbMongoCollection#account_name}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#database_name CosmosdbMongoCollection#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#name CosmosdbMongoCollection#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#resource_group_name CosmosdbMongoCollection#resource_group_name}.

---

##### `analytical_storage_ttl`<sup>Optional</sup> <a name="analytical_storage_ttl" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.analyticalStorageTtl"></a>

```python
analytical_storage_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#analytical_storage_ttl CosmosdbMongoCollection#analytical_storage_ttl}.

---

##### `autoscale_settings`<sup>Optional</sup> <a name="autoscale_settings" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.autoscaleSettings"></a>

```python
autoscale_settings: CosmosdbMongoCollectionAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#autoscale_settings CosmosdbMongoCollection#autoscale_settings}

---

##### `default_ttl_seconds`<sup>Optional</sup> <a name="default_ttl_seconds" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.defaultTtlSeconds"></a>

```python
default_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#default_ttl_seconds CosmosdbMongoCollection#default_ttl_seconds}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#id CosmosdbMongoCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.index"></a>

```python
index: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#index CosmosdbMongoCollection#index}

---

##### `shard_key`<sup>Optional</sup> <a name="shard_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.shardKey"></a>

```python
shard_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#shard_key CosmosdbMongoCollection#shard_key}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#throughput CosmosdbMongoCollection#throughput}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionConfig.property.timeouts"></a>

```python
timeouts: CosmosdbMongoCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#timeouts CosmosdbMongoCollection#timeouts}

---

### CosmosdbMongoCollectionIndex <a name="CosmosdbMongoCollectionIndex" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionIndex(
  keys: typing.List[str],
  unique: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys">keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique">unique</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}. |

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#keys CosmosdbMongoCollection#keys}.

---

##### `unique`<sup>Optional</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex.property.unique"></a>

```python
unique: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#unique CosmosdbMongoCollection#unique}.

---

### CosmosdbMongoCollectionSystemIndexes <a name="CosmosdbMongoCollectionSystemIndexes" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes()
```


### CosmosdbMongoCollectionTimeouts <a name="CosmosdbMongoCollectionTimeouts" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#create CosmosdbMongoCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#delete CosmosdbMongoCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#read CosmosdbMongoCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.114.0/docs/resources/cosmosdb_mongo_collection#update CosmosdbMongoCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbMongoCollectionAutoscaleSettingsOutputReference <a name="CosmosdbMongoCollectionAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput">reset_max_throughput</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_throughput` <a name="reset_max_throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```python
def reset_max_throughput() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput">max_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_throughput_input`<sup>Optional</sup> <a name="max_throughput_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```python
max_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_throughput`<sup>Required</sup> <a name="max_throughput" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbMongoCollectionAutoscaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionAutoscaleSettings">CosmosdbMongoCollectionAutoscaleSettings</a>

---


### CosmosdbMongoCollectionIndexList <a name="CosmosdbMongoCollectionIndexList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbMongoCollectionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CosmosdbMongoCollectionIndex]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]]

---


### CosmosdbMongoCollectionIndexOutputReference <a name="CosmosdbMongoCollectionIndexOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique">reset_unique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unique` <a name="reset_unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.resetUnique"></a>

```python
def reset_unique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput">unique_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique">unique</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unique_input`<sup>Optional</sup> <a name="unique_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.uniqueInput"></a>

```python
unique_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.unique"></a>

```python
unique: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndexOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbMongoCollectionIndex]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionIndex">CosmosdbMongoCollectionIndex</a>]

---


### CosmosdbMongoCollectionSystemIndexesList <a name="CosmosdbMongoCollectionSystemIndexesList" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CosmosdbMongoCollectionSystemIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CosmosdbMongoCollectionSystemIndexesOutputReference <a name="CosmosdbMongoCollectionSystemIndexesOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique">unique</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unique`<sup>Required</sup> <a name="unique" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.unique"></a>

```python
unique: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexesOutputReference.property.internalValue"></a>

```python
internal_value: CosmosdbMongoCollectionSystemIndexes
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionSystemIndexes">CosmosdbMongoCollectionSystemIndexes</a>

---


### CosmosdbMongoCollectionTimeoutsOutputReference <a name="CosmosdbMongoCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import cosmosdb_mongo_collection

cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CosmosdbMongoCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.cosmosdbMongoCollection.CosmosdbMongoCollectionTimeouts">CosmosdbMongoCollectionTimeouts</a>]

---



