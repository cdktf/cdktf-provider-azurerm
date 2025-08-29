# `hpcCacheNfsTarget` Submodule <a name="`hpcCacheNfsTarget` Submodule" id="@cdktf/provider-azurerm.hpcCacheNfsTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HpcCacheNfsTarget <a name="HpcCacheNfsTarget" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target azurerm_hpc_cache_nfs_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_name: str,
  name: str,
  namespace_junction: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]],
  resource_group_name: str,
  target_host_name: str,
  usage_model: str,
  id: str = None,
  timeouts: HpcCacheNfsTargetTimeouts = None,
  verification_timer_in_seconds: typing.Union[int, float] = None,
  write_back_timer_in_seconds: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.cacheName">cache_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.namespaceJunction">namespace_junction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]</code> | namespace_junction block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.targetHostName">target_host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.usageModel">usage_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.verificationTimerInSeconds">verification_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#verification_timer_in_seconds HpcCacheNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.writeBackTimerInSeconds">write_back_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#write_back_timer_in_seconds HpcCacheNfsTarget#write_back_timer_in_seconds}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_name`<sup>Required</sup> <a name="cache_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.cacheName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}.

---

##### `namespace_junction`<sup>Required</sup> <a name="namespace_junction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.namespaceJunction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]

namespace_junction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#namespace_junction HpcCacheNfsTarget#namespace_junction}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}.

---

##### `target_host_name`<sup>Required</sup> <a name="target_host_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.targetHostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}.

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.usageModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#timeouts HpcCacheNfsTarget#timeouts}

---

##### `verification_timer_in_seconds`<sup>Optional</sup> <a name="verification_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.verificationTimerInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#verification_timer_in_seconds HpcCacheNfsTarget#verification_timer_in_seconds}.

---

##### `write_back_timer_in_seconds`<sup>Optional</sup> <a name="write_back_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.Initializer.parameter.writeBackTimerInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#write_back_timer_in_seconds HpcCacheNfsTarget#write_back_timer_in_seconds}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction">put_namespace_junction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetVerificationTimerInSeconds">reset_verification_timer_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetWriteBackTimerInSeconds">reset_write_back_timer_in_seconds</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_namespace_junction` <a name="put_namespace_junction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction"></a>

```python
def put_namespace_junction(
  value: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putNamespaceJunction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_verification_timer_in_seconds` <a name="reset_verification_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetVerificationTimerInSeconds"></a>

```python
def reset_verification_timer_in_seconds() -> None
```

##### `reset_write_back_timer_in_seconds` <a name="reset_write_back_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.resetWriteBackTimerInSeconds"></a>

```python
def reset_write_back_timer_in_seconds() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HpcCacheNfsTarget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HpcCacheNfsTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HpcCacheNfsTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HpcCacheNfsTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HpcCacheNfsTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunction">namespace_junction</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList">HpcCacheNfsTargetNamespaceJunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference">HpcCacheNfsTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheNameInput">cache_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunctionInput">namespace_junction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostNameInput">target_host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModelInput">usage_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.verificationTimerInSecondsInput">verification_timer_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.writeBackTimerInSecondsInput">write_back_timer_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheName">cache_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostName">target_host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModel">usage_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.verificationTimerInSeconds">verification_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.writeBackTimerInSeconds">write_back_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `namespace_junction`<sup>Required</sup> <a name="namespace_junction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunction"></a>

```python
namespace_junction: HpcCacheNfsTargetNamespaceJunctionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList">HpcCacheNfsTargetNamespaceJunctionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeouts"></a>

```python
timeouts: HpcCacheNfsTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference">HpcCacheNfsTargetTimeoutsOutputReference</a>

---

##### `cache_name_input`<sup>Optional</sup> <a name="cache_name_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheNameInput"></a>

```python
cache_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_junction_input`<sup>Optional</sup> <a name="namespace_junction_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.namespaceJunctionInput"></a>

```python
namespace_junction_input: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `target_host_name_input`<sup>Optional</sup> <a name="target_host_name_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostNameInput"></a>

```python
target_host_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, HpcCacheNfsTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>]

---

##### `usage_model_input`<sup>Optional</sup> <a name="usage_model_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModelInput"></a>

```python
usage_model_input: str
```

- *Type:* str

---

##### `verification_timer_in_seconds_input`<sup>Optional</sup> <a name="verification_timer_in_seconds_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.verificationTimerInSecondsInput"></a>

```python
verification_timer_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_back_timer_in_seconds_input`<sup>Optional</sup> <a name="write_back_timer_in_seconds_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.writeBackTimerInSecondsInput"></a>

```python
write_back_timer_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_name`<sup>Required</sup> <a name="cache_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.cacheName"></a>

```python
cache_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `target_host_name`<sup>Required</sup> <a name="target_host_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.targetHostName"></a>

```python
target_host_name: str
```

- *Type:* str

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

---

##### `verification_timer_in_seconds`<sup>Required</sup> <a name="verification_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.verificationTimerInSeconds"></a>

```python
verification_timer_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `write_back_timer_in_seconds`<sup>Required</sup> <a name="write_back_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.writeBackTimerInSeconds"></a>

```python
write_back_timer_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HpcCacheNfsTargetConfig <a name="HpcCacheNfsTargetConfig" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cache_name: str,
  name: str,
  namespace_junction: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]],
  resource_group_name: str,
  target_host_name: str,
  usage_model: str,
  id: str = None,
  timeouts: HpcCacheNfsTargetTimeouts = None,
  verification_timer_in_seconds: typing.Union[int, float] = None,
  write_back_timer_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.cacheName">cache_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.namespaceJunction">namespace_junction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]</code> | namespace_junction block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.targetHostName">target_host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.usageModel">usage_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.verificationTimerInSeconds">verification_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#verification_timer_in_seconds HpcCacheNfsTarget#verification_timer_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.writeBackTimerInSeconds">write_back_timer_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#write_back_timer_in_seconds HpcCacheNfsTarget#write_back_timer_in_seconds}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cache_name`<sup>Required</sup> <a name="cache_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.cacheName"></a>

```python
cache_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#cache_name HpcCacheNfsTarget#cache_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#name HpcCacheNfsTarget#name}.

---

##### `namespace_junction`<sup>Required</sup> <a name="namespace_junction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.namespaceJunction"></a>

```python
namespace_junction: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]

namespace_junction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#namespace_junction HpcCacheNfsTarget#namespace_junction}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#resource_group_name HpcCacheNfsTarget#resource_group_name}.

---

##### `target_host_name`<sup>Required</sup> <a name="target_host_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.targetHostName"></a>

```python
target_host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_host_name HpcCacheNfsTarget#target_host_name}.

---

##### `usage_model`<sup>Required</sup> <a name="usage_model" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.usageModel"></a>

```python
usage_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#usage_model HpcCacheNfsTarget#usage_model}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#id HpcCacheNfsTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.timeouts"></a>

```python
timeouts: HpcCacheNfsTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#timeouts HpcCacheNfsTarget#timeouts}

---

##### `verification_timer_in_seconds`<sup>Optional</sup> <a name="verification_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.verificationTimerInSeconds"></a>

```python
verification_timer_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#verification_timer_in_seconds HpcCacheNfsTarget#verification_timer_in_seconds}.

---

##### `write_back_timer_in_seconds`<sup>Optional</sup> <a name="write_back_timer_in_seconds" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetConfig.property.writeBackTimerInSeconds"></a>

```python
write_back_timer_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#write_back_timer_in_seconds HpcCacheNfsTarget#write_back_timer_in_seconds}.

---

### HpcCacheNfsTargetNamespaceJunction <a name="HpcCacheNfsTargetNamespaceJunction" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction(
  namespace_path: str,
  nfs_export: str,
  access_policy_name: str = None,
  target_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.namespacePath">namespace_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.nfsExport">nfs_export</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.accessPolicyName">access_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.targetPath">target_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}. |

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#namespace_path HpcCacheNfsTarget#namespace_path}.

---

##### `nfs_export`<sup>Required</sup> <a name="nfs_export" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.nfsExport"></a>

```python
nfs_export: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#nfs_export HpcCacheNfsTarget#nfs_export}.

---

##### `access_policy_name`<sup>Optional</sup> <a name="access_policy_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.accessPolicyName"></a>

```python
access_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#access_policy_name HpcCacheNfsTarget#access_policy_name}.

---

##### `target_path`<sup>Optional</sup> <a name="target_path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction.property.targetPath"></a>

```python
target_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#target_path HpcCacheNfsTarget#target_path}.

---

### HpcCacheNfsTargetTimeouts <a name="HpcCacheNfsTargetTimeouts" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#create HpcCacheNfsTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#delete HpcCacheNfsTarget#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#read HpcCacheNfsTarget#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.42.0/docs/resources/hpc_cache_nfs_target#update HpcCacheNfsTarget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HpcCacheNfsTargetNamespaceJunctionList <a name="HpcCacheNfsTargetNamespaceJunctionList" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HpcCacheNfsTargetNamespaceJunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[HpcCacheNfsTargetNamespaceJunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]]

---


### HpcCacheNfsTargetNamespaceJunctionOutputReference <a name="HpcCacheNfsTargetNamespaceJunctionOutputReference" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetAccessPolicyName">reset_access_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetTargetPath">reset_target_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_policy_name` <a name="reset_access_policy_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetAccessPolicyName"></a>

```python
def reset_access_policy_name() -> None
```

##### `reset_target_path` <a name="reset_target_path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.resetTargetPath"></a>

```python
def reset_target_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyNameInput">access_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePathInput">namespace_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExportInput">nfs_export_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPathInput">target_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyName">access_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExport">nfs_export</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPath">target_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_policy_name_input`<sup>Optional</sup> <a name="access_policy_name_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyNameInput"></a>

```python
access_policy_name_input: str
```

- *Type:* str

---

##### `namespace_path_input`<sup>Optional</sup> <a name="namespace_path_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePathInput"></a>

```python
namespace_path_input: str
```

- *Type:* str

---

##### `nfs_export_input`<sup>Optional</sup> <a name="nfs_export_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExportInput"></a>

```python
nfs_export_input: str
```

- *Type:* str

---

##### `target_path_input`<sup>Optional</sup> <a name="target_path_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPathInput"></a>

```python
target_path_input: str
```

- *Type:* str

---

##### `access_policy_name`<sup>Required</sup> <a name="access_policy_name" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.accessPolicyName"></a>

```python
access_policy_name: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

##### `nfs_export`<sup>Required</sup> <a name="nfs_export" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.nfsExport"></a>

```python
nfs_export: str
```

- *Type:* str

---

##### `target_path`<sup>Required</sup> <a name="target_path" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.targetPath"></a>

```python
target_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunctionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheNfsTargetNamespaceJunction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetNamespaceJunction">HpcCacheNfsTargetNamespaceJunction</a>]

---


### HpcCacheNfsTargetTimeoutsOutputReference <a name="HpcCacheNfsTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import hpc_cache_nfs_target

hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, HpcCacheNfsTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.hpcCacheNfsTarget.HpcCacheNfsTargetTimeouts">HpcCacheNfsTargetTimeouts</a>]

---



