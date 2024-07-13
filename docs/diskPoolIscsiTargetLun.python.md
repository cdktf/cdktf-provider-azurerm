# `diskPoolIscsiTargetLun` Submodule <a name="`diskPoolIscsiTargetLun` Submodule" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolIscsiTargetLun <a name="DiskPoolIscsiTargetLun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun azurerm_disk_pool_iscsi_target_lun}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_pool_managed_disk_attachment_id: str,
  iscsi_target_id: str,
  name: str,
  id: str = None,
  timeouts: DiskPoolIscsiTargetLunTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.diskPoolManagedDiskAttachmentId">disk_pool_managed_disk_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.iscsiTargetId">iscsi_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_pool_managed_disk_attachment_id`<sup>Required</sup> <a name="disk_pool_managed_disk_attachment_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.diskPoolManagedDiskAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `iscsi_target_id`<sup>Required</sup> <a name="iscsi_target_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.iscsiTargetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DiskPoolIscsiTargetLun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DiskPoolIscsiTargetLun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DiskPoolIscsiTargetLun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DiskPoolIscsiTargetLun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DiskPoolIscsiTargetLun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun">lun</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput">disk_pool_managed_disk_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput">iscsi_target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId">disk_pool_managed_disk_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId">iscsi_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.lun"></a>

```python
lun: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeouts"></a>

```python
timeouts: DiskPoolIscsiTargetLunTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference">DiskPoolIscsiTargetLunTimeoutsOutputReference</a>

---

##### `disk_pool_managed_disk_attachment_id_input`<sup>Optional</sup> <a name="disk_pool_managed_disk_attachment_id_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentIdInput"></a>

```python
disk_pool_managed_disk_attachment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iscsi_target_id_input`<sup>Optional</sup> <a name="iscsi_target_id_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetIdInput"></a>

```python
iscsi_target_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DiskPoolIscsiTargetLunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>]

---

##### `disk_pool_managed_disk_attachment_id`<sup>Required</sup> <a name="disk_pool_managed_disk_attachment_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.diskPoolManagedDiskAttachmentId"></a>

```python
disk_pool_managed_disk_attachment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iscsi_target_id`<sup>Required</sup> <a name="iscsi_target_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.iscsiTargetId"></a>

```python
iscsi_target_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolIscsiTargetLunConfig <a name="DiskPoolIscsiTargetLunConfig" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_pool_managed_disk_attachment_id: str,
  iscsi_target_id: str,
  name: str,
  id: str = None,
  timeouts: DiskPoolIscsiTargetLunTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId">disk_pool_managed_disk_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId">iscsi_target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_pool_managed_disk_attachment_id`<sup>Required</sup> <a name="disk_pool_managed_disk_attachment_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.diskPoolManagedDiskAttachmentId"></a>

```python
disk_pool_managed_disk_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#disk_pool_managed_disk_attachment_id DiskPoolIscsiTargetLun#disk_pool_managed_disk_attachment_id}.

---

##### `iscsi_target_id`<sup>Required</sup> <a name="iscsi_target_id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.iscsiTargetId"></a>

```python
iscsi_target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#iscsi_target_id DiskPoolIscsiTargetLun#iscsi_target_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#name DiskPoolIscsiTargetLun#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#id DiskPoolIscsiTargetLun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunConfig.property.timeouts"></a>

```python
timeouts: DiskPoolIscsiTargetLunTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#timeouts DiskPoolIscsiTargetLun#timeouts}

---

### DiskPoolIscsiTargetLunTimeouts <a name="DiskPoolIscsiTargetLunTimeouts" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#create DiskPoolIscsiTargetLun#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#delete DiskPoolIscsiTargetLun#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/disk_pool_iscsi_target_lun#read DiskPoolIscsiTargetLun#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolIscsiTargetLunTimeoutsOutputReference <a name="DiskPoolIscsiTargetLunTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import disk_pool_iscsi_target_lun

diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DiskPoolIscsiTargetLunTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.diskPoolIscsiTargetLun.DiskPoolIscsiTargetLunTimeouts">DiskPoolIscsiTargetLunTimeouts</a>]

---



