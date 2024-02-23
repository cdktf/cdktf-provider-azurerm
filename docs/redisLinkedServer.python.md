# `redisLinkedServer` Submodule <a name="`redisLinkedServer` Submodule" id="@cdktf/provider-azurerm.redisLinkedServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisLinkedServer <a name="RedisLinkedServer" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server azurerm_redis_linked_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_redis_cache_id: str,
  linked_redis_cache_location: str,
  resource_group_name: str,
  server_role: str,
  target_redis_cache_name: str,
  id: str = None,
  timeouts: RedisLinkedServerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.linkedRedisCacheId">linked_redis_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.linkedRedisCacheLocation">linked_redis_cache_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#resource_group_name RedisLinkedServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.serverRole">server_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#server_role RedisLinkedServer#server_role}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.targetRedisCacheName">target_redis_cache_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#id RedisLinkedServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_redis_cache_id`<sup>Required</sup> <a name="linked_redis_cache_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.linkedRedisCacheId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}.

---

##### `linked_redis_cache_location`<sup>Required</sup> <a name="linked_redis_cache_location" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.linkedRedisCacheLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#resource_group_name RedisLinkedServer#resource_group_name}.

---

##### `server_role`<sup>Required</sup> <a name="server_role" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.serverRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#server_role RedisLinkedServer#server_role}.

---

##### `target_redis_cache_name`<sup>Required</sup> <a name="target_redis_cache_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.targetRedisCacheName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#id RedisLinkedServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#timeouts RedisLinkedServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#create RedisLinkedServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#delete RedisLinkedServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#read RedisLinkedServer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedisLinkedServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedisLinkedServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisLinkedServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisLinkedServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisLinkedServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.geoReplicatedPrimaryHostName">geo_replicated_primary_host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference">RedisLinkedServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheIdInput">linked_redis_cache_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheLocationInput">linked_redis_cache_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.serverRoleInput">server_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.targetRedisCacheNameInput">target_redis_cache_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheId">linked_redis_cache_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheLocation">linked_redis_cache_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.serverRole">server_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.targetRedisCacheName">target_redis_cache_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `geo_replicated_primary_host_name`<sup>Required</sup> <a name="geo_replicated_primary_host_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.geoReplicatedPrimaryHostName"></a>

```python
geo_replicated_primary_host_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.timeouts"></a>

```python
timeouts: RedisLinkedServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference">RedisLinkedServerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_redis_cache_id_input`<sup>Optional</sup> <a name="linked_redis_cache_id_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheIdInput"></a>

```python
linked_redis_cache_id_input: str
```

- *Type:* str

---

##### `linked_redis_cache_location_input`<sup>Optional</sup> <a name="linked_redis_cache_location_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheLocationInput"></a>

```python
linked_redis_cache_location_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `server_role_input`<sup>Optional</sup> <a name="server_role_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.serverRoleInput"></a>

```python
server_role_input: str
```

- *Type:* str

---

##### `target_redis_cache_name_input`<sup>Optional</sup> <a name="target_redis_cache_name_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.targetRedisCacheNameInput"></a>

```python
target_redis_cache_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedisLinkedServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_redis_cache_id`<sup>Required</sup> <a name="linked_redis_cache_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheId"></a>

```python
linked_redis_cache_id: str
```

- *Type:* str

---

##### `linked_redis_cache_location`<sup>Required</sup> <a name="linked_redis_cache_location" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.linkedRedisCacheLocation"></a>

```python
linked_redis_cache_location: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `server_role`<sup>Required</sup> <a name="server_role" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.serverRole"></a>

```python
server_role: str
```

- *Type:* str

---

##### `target_redis_cache_name`<sup>Required</sup> <a name="target_redis_cache_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.targetRedisCacheName"></a>

```python
target_redis_cache_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisLinkedServerConfig <a name="RedisLinkedServerConfig" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  linked_redis_cache_id: str,
  linked_redis_cache_location: str,
  resource_group_name: str,
  server_role: str,
  target_redis_cache_name: str,
  id: str = None,
  timeouts: RedisLinkedServerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.linkedRedisCacheId">linked_redis_cache_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.linkedRedisCacheLocation">linked_redis_cache_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#resource_group_name RedisLinkedServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.serverRole">server_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#server_role RedisLinkedServer#server_role}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.targetRedisCacheName">target_redis_cache_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#id RedisLinkedServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `linked_redis_cache_id`<sup>Required</sup> <a name="linked_redis_cache_id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.linkedRedisCacheId"></a>

```python
linked_redis_cache_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}.

---

##### `linked_redis_cache_location`<sup>Required</sup> <a name="linked_redis_cache_location" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.linkedRedisCacheLocation"></a>

```python
linked_redis_cache_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#resource_group_name RedisLinkedServer#resource_group_name}.

---

##### `server_role`<sup>Required</sup> <a name="server_role" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.serverRole"></a>

```python
server_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#server_role RedisLinkedServer#server_role}.

---

##### `target_redis_cache_name`<sup>Required</sup> <a name="target_redis_cache_name" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.targetRedisCacheName"></a>

```python
target_redis_cache_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#id RedisLinkedServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerConfig.property.timeouts"></a>

```python
timeouts: RedisLinkedServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#timeouts RedisLinkedServer#timeouts}

---

### RedisLinkedServerTimeouts <a name="RedisLinkedServerTimeouts" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#create RedisLinkedServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#delete RedisLinkedServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#read RedisLinkedServer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#create RedisLinkedServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#delete RedisLinkedServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/resources/redis_linked_server#read RedisLinkedServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisLinkedServerTimeoutsOutputReference <a name="RedisLinkedServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_linked_server

redisLinkedServer.RedisLinkedServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisLinkedServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisLinkedServer.RedisLinkedServerTimeouts">RedisLinkedServerTimeouts</a>]

---



