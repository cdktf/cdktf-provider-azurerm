# `diskPoolIscsiTarget` Submodule <a name="`diskPoolIscsiTarget` Submodule" id="@cdktf/provider-azurerm.diskPoolIscsiTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolIscsiTarget <a name="DiskPoolIscsiTarget" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target azurerm_disk_pool_iscsi_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTarget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_mode: str,
  disks_pool_id: str,
  name: str,
  id: str = None,
  target_iqn: str = None,
  timeouts: DiskPoolIscsiTargetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.aclMode">acl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#acl_mode DiskPoolIscsiTarget#acl_mode}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.disksPoolId">disks_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#disks_pool_id DiskPoolIscsiTarget#disks_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#name DiskPoolIscsiTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#id DiskPoolIscsiTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.targetIqn">target_iqn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#target_iqn DiskPoolIscsiTarget#target_iqn}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_mode`<sup>Required</sup> <a name="acl_mode" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.aclMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#acl_mode DiskPoolIscsiTarget#acl_mode}.

---

##### `disks_pool_id`<sup>Required</sup> <a name="disks_pool_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.disksPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#disks_pool_id DiskPoolIscsiTarget#disks_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#name DiskPoolIscsiTarget#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#id DiskPoolIscsiTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_iqn`<sup>Optional</sup> <a name="target_iqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.targetIqn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#target_iqn DiskPoolIscsiTarget#target_iqn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#timeouts DiskPoolIscsiTarget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetTargetIqn">reset_target_iqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#create DiskPoolIscsiTarget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#delete DiskPoolIscsiTarget#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#read DiskPoolIscsiTarget#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_iqn` <a name="reset_target_iqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetTargetIqn"></a>

```python
def reset_target_iqn() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DiskPoolIscsiTarget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DiskPoolIscsiTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiskPoolIscsiTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiskPoolIscsiTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiskPoolIscsiTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.endpoints">endpoints</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference">DiskPoolIscsiTargetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.aclModeInput">acl_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.disksPoolIdInput">disks_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.targetIqnInput">target_iqn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.aclMode">acl_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.disksPoolId">disks_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.targetIqn">target_iqn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.endpoints"></a>

```python
endpoints: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.timeouts"></a>

```python
timeouts: DiskPoolIscsiTargetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference">DiskPoolIscsiTargetTimeoutsOutputReference</a>

---

##### `acl_mode_input`<sup>Optional</sup> <a name="acl_mode_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.aclModeInput"></a>

```python
acl_mode_input: str
```

- *Type:* str

---

##### `disks_pool_id_input`<sup>Optional</sup> <a name="disks_pool_id_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.disksPoolIdInput"></a>

```python
disks_pool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `target_iqn_input`<sup>Optional</sup> <a name="target_iqn_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.targetIqnInput"></a>

```python
target_iqn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DiskPoolIscsiTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>]

---

##### `acl_mode`<sup>Required</sup> <a name="acl_mode" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.aclMode"></a>

```python
acl_mode: str
```

- *Type:* str

---

##### `disks_pool_id`<sup>Required</sup> <a name="disks_pool_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.disksPoolId"></a>

```python
disks_pool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_iqn`<sup>Required</sup> <a name="target_iqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.targetIqn"></a>

```python
target_iqn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolIscsiTargetConfig <a name="DiskPoolIscsiTargetConfig" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTargetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl_mode: str,
  disks_pool_id: str,
  name: str,
  id: str = None,
  target_iqn: str = None,
  timeouts: DiskPoolIscsiTargetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.aclMode">acl_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#acl_mode DiskPoolIscsiTarget#acl_mode}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.disksPoolId">disks_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#disks_pool_id DiskPoolIscsiTarget#disks_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#name DiskPoolIscsiTarget#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#id DiskPoolIscsiTarget#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.targetIqn">target_iqn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#target_iqn DiskPoolIscsiTarget#target_iqn}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl_mode`<sup>Required</sup> <a name="acl_mode" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.aclMode"></a>

```python
acl_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#acl_mode DiskPoolIscsiTarget#acl_mode}.

---

##### `disks_pool_id`<sup>Required</sup> <a name="disks_pool_id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.disksPoolId"></a>

```python
disks_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#disks_pool_id DiskPoolIscsiTarget#disks_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#name DiskPoolIscsiTarget#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#id DiskPoolIscsiTarget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_iqn`<sup>Optional</sup> <a name="target_iqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.targetIqn"></a>

```python
target_iqn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#target_iqn DiskPoolIscsiTarget#target_iqn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetConfig.property.timeouts"></a>

```python
timeouts: DiskPoolIscsiTargetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#timeouts DiskPoolIscsiTarget#timeouts}

---

### DiskPoolIscsiTargetTimeouts <a name="DiskPoolIscsiTargetTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#create DiskPoolIscsiTarget#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#delete DiskPoolIscsiTarget#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#read DiskPoolIscsiTarget#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#create DiskPoolIscsiTarget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#delete DiskPoolIscsiTarget#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/disk_pool_iscsi_target#read DiskPoolIscsiTarget#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolIscsiTargetTimeoutsOutputReference <a name="DiskPoolIscsiTargetTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target

diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiskPoolIscsiTargetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTarget.DiskPoolIscsiTargetTimeouts">DiskPoolIscsiTargetTimeouts</a>]

---



