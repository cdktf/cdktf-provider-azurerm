# `redisEnterpriseCluster` Submodule <a name="`redisEnterpriseCluster` Submodule" id="@cdktf/provider-azurerm.redisEnterpriseCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedisEnterpriseCluster <a name="RedisEnterpriseCluster" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster azurerm_redis_enterprise_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseCluster(
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
  id: str = None,
  minimum_tls_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RedisEnterpriseClusterTimeouts = None,
  zones: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.skuName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#timeouts RedisEnterpriseCluster#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.Initializer.parameter.zones"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetMinimumTlsVersion">reset_minimum_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetZones">reset_zones</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#create RedisEnterpriseCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#delete RedisEnterpriseCluster#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#read RedisEnterpriseCluster#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#update RedisEnterpriseCluster#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_minimum_tls_version` <a name="reset_minimum_tls_version" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetMinimumTlsVersion"></a>

```python
def reset_minimum_tls_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zones` <a name="reset_zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.resetZones"></a>

```python
def reset_zones() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedisEnterpriseCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedisEnterpriseCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedisEnterpriseCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedisEnterpriseCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedisEnterpriseCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference">RedisEnterpriseClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersionInput">minimum_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuNameInput">sku_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zonesInput">zones_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zones">zones</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeouts"></a>

```python
timeouts: RedisEnterpriseClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference">RedisEnterpriseClusterTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `minimum_tls_version_input`<sup>Optional</sup> <a name="minimum_tls_version_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersionInput"></a>

```python
minimum_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_name_input`<sup>Optional</sup> <a name="sku_name_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuNameInput"></a>

```python
sku_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, RedisEnterpriseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>]

---

##### `zones_input`<sup>Optional</sup> <a name="zones_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zonesInput"></a>

```python
zones_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedisEnterpriseClusterConfig <a name="RedisEnterpriseClusterConfig" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseClusterConfig(
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
  id: str = None,
  minimum_tls_version: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: RedisEnterpriseClusterTimeouts = None,
  zones: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.skuName">sku_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.zones">zones</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#location RedisEnterpriseCluster#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#name RedisEnterpriseCluster#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#resource_group_name RedisEnterpriseCluster#resource_group_name}.

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#sku_name RedisEnterpriseCluster#sku_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#id RedisEnterpriseCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#minimum_tls_version RedisEnterpriseCluster#minimum_tls_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#tags RedisEnterpriseCluster#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.timeouts"></a>

```python
timeouts: RedisEnterpriseClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#timeouts RedisEnterpriseCluster#timeouts}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterConfig.property.zones"></a>

```python
zones: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#zones RedisEnterpriseCluster#zones}.

---

### RedisEnterpriseClusterTimeouts <a name="RedisEnterpriseClusterTimeouts" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseClusterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#create RedisEnterpriseCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#delete RedisEnterpriseCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#read RedisEnterpriseCluster#read}. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#update RedisEnterpriseCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#create RedisEnterpriseCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#delete RedisEnterpriseCluster#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#read RedisEnterpriseCluster#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/redis_enterprise_cluster#update RedisEnterpriseCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedisEnterpriseClusterTimeoutsOutputReference <a name="RedisEnterpriseClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import redis_enterprise_cluster

redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RedisEnterpriseClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.redisEnterpriseCluster.RedisEnterpriseClusterTimeouts">RedisEnterpriseClusterTimeouts</a>]

---



