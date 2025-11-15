# `managedRedisGeoReplication` Submodule <a name="`managedRedisGeoReplication` Submodule" id="@cdktf/provider-azurerm.managedRedisGeoReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedRedisGeoReplication <a name="ManagedRedisGeoReplication" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication azurerm_managed_redis_geo_replication}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_managed_redis_ids: typing.List[str],
  managed_redis_id: str,
  id: str = None,
  timeouts: ManagedRedisGeoReplicationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.linkedManagedRedisIds">linked_managed_redis_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#linked_managed_redis_ids ManagedRedisGeoReplication#linked_managed_redis_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.managedRedisId">managed_redis_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#managed_redis_id ManagedRedisGeoReplication#managed_redis_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#id ManagedRedisGeoReplication#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_managed_redis_ids`<sup>Required</sup> <a name="linked_managed_redis_ids" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.linkedManagedRedisIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#linked_managed_redis_ids ManagedRedisGeoReplication#linked_managed_redis_ids}.

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.managedRedisId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#managed_redis_id ManagedRedisGeoReplication#managed_redis_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#id ManagedRedisGeoReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#timeouts ManagedRedisGeoReplication#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#create ManagedRedisGeoReplication#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#delete ManagedRedisGeoReplication#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#read ManagedRedisGeoReplication#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#update ManagedRedisGeoReplication#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagedRedisGeoReplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagedRedisGeoReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagedRedisGeoReplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagedRedisGeoReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedRedisGeoReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference">ManagedRedisGeoReplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.linkedManagedRedisIdsInput">linked_managed_redis_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.managedRedisIdInput">managed_redis_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.linkedManagedRedisIds">linked_managed_redis_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.managedRedisId">managed_redis_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.timeouts"></a>

```python
timeouts: ManagedRedisGeoReplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference">ManagedRedisGeoReplicationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_managed_redis_ids_input`<sup>Optional</sup> <a name="linked_managed_redis_ids_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.linkedManagedRedisIdsInput"></a>

```python
linked_managed_redis_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_redis_id_input`<sup>Optional</sup> <a name="managed_redis_id_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.managedRedisIdInput"></a>

```python
managed_redis_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ManagedRedisGeoReplicationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_managed_redis_ids`<sup>Required</sup> <a name="linked_managed_redis_ids" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.linkedManagedRedisIds"></a>

```python
linked_managed_redis_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.managedRedisId"></a>

```python
managed_redis_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedRedisGeoReplicationConfig <a name="ManagedRedisGeoReplicationConfig" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  linked_managed_redis_ids: typing.List[str],
  managed_redis_id: str,
  id: str = None,
  timeouts: ManagedRedisGeoReplicationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.linkedManagedRedisIds">linked_managed_redis_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#linked_managed_redis_ids ManagedRedisGeoReplication#linked_managed_redis_ids}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.managedRedisId">managed_redis_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#managed_redis_id ManagedRedisGeoReplication#managed_redis_id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#id ManagedRedisGeoReplication#id}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `linked_managed_redis_ids`<sup>Required</sup> <a name="linked_managed_redis_ids" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.linkedManagedRedisIds"></a>

```python
linked_managed_redis_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#linked_managed_redis_ids ManagedRedisGeoReplication#linked_managed_redis_ids}.

---

##### `managed_redis_id`<sup>Required</sup> <a name="managed_redis_id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.managedRedisId"></a>

```python
managed_redis_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#managed_redis_id ManagedRedisGeoReplication#managed_redis_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#id ManagedRedisGeoReplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationConfig.property.timeouts"></a>

```python
timeouts: ManagedRedisGeoReplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#timeouts ManagedRedisGeoReplication#timeouts}

---

### ManagedRedisGeoReplicationTimeouts <a name="ManagedRedisGeoReplicationTimeouts" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#create ManagedRedisGeoReplication#create}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#delete ManagedRedisGeoReplication#delete}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#read ManagedRedisGeoReplication#read}. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#update ManagedRedisGeoReplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#create ManagedRedisGeoReplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#delete ManagedRedisGeoReplication#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#read ManagedRedisGeoReplication#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.53.0/docs/resources/managed_redis_geo_replication#update ManagedRedisGeoReplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedRedisGeoReplicationTimeoutsOutputReference <a name="ManagedRedisGeoReplicationTimeoutsOutputReference" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import managed_redis_geo_replication

managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ManagedRedisGeoReplicationTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.managedRedisGeoReplication.ManagedRedisGeoReplicationTimeouts">ManagedRedisGeoReplicationTimeouts</a>

---



