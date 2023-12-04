# `backupProtectedVm` Submodule <a name="`backupProtectedVm` Submodule" id="@cdktf/provider-azurerm.backupProtectedVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupProtectedVm <a name="BackupProtectedVm" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm azurerm_backup_protected_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recovery_vault_name: str,
  resource_group_name: str,
  backup_policy_id: str = None,
  exclude_disk_luns: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  include_disk_luns: typing.List[typing.Union[int, float]] = None,
  protection_state: str = None,
  source_vm_id: str = None,
  timeouts: BackupProtectedVmTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#recovery_vault_name BackupProtectedVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#resource_group_name BackupProtectedVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#backup_policy_id BackupProtectedVm#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.excludeDiskLuns">exclude_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#id BackupProtectedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.includeDiskLuns">include_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#include_disk_luns BackupProtectedVm#include_disk_luns}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.protectionState">protection_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#protection_state BackupProtectedVm#protection_state}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.sourceVmId">source_vm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#source_vm_id BackupProtectedVm#source_vm_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#recovery_vault_name BackupProtectedVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#resource_group_name BackupProtectedVm#resource_group_name}.

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#backup_policy_id BackupProtectedVm#backup_policy_id}.

---

##### `exclude_disk_luns`<sup>Optional</sup> <a name="exclude_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.excludeDiskLuns"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#id BackupProtectedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_disk_luns`<sup>Optional</sup> <a name="include_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.includeDiskLuns"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#include_disk_luns BackupProtectedVm#include_disk_luns}.

---

##### `protection_state`<sup>Optional</sup> <a name="protection_state" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.protectionState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#protection_state BackupProtectedVm#protection_state}.

---

##### `source_vm_id`<sup>Optional</sup> <a name="source_vm_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.sourceVmId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#source_vm_id BackupProtectedVm#source_vm_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#timeouts BackupProtectedVm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetBackupPolicyId">reset_backup_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetExcludeDiskLuns">reset_exclude_disk_luns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetIncludeDiskLuns">reset_include_disk_luns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetProtectionState">reset_protection_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetSourceVmId">reset_source_vm_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#create BackupProtectedVm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#delete BackupProtectedVm#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#read BackupProtectedVm#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#update BackupProtectedVm#update}.

---

##### `reset_backup_policy_id` <a name="reset_backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetBackupPolicyId"></a>

```python
def reset_backup_policy_id() -> None
```

##### `reset_exclude_disk_luns` <a name="reset_exclude_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetExcludeDiskLuns"></a>

```python
def reset_exclude_disk_luns() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_disk_luns` <a name="reset_include_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetIncludeDiskLuns"></a>

```python
def reset_include_disk_luns() -> None
```

##### `reset_protection_state` <a name="reset_protection_state" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetProtectionState"></a>

```python
def reset_protection_state() -> None
```

##### `reset_source_vm_id` <a name="reset_source_vm_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetSourceVmId"></a>

```python
def reset_source_vm_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupProtectedVm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupProtectedVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupProtectedVm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupProtectedVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupProtectedVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference">BackupProtectedVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.excludeDiskLunsInput">exclude_disk_luns_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.includeDiskLunsInput">include_disk_luns_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.protectionStateInput">protection_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.sourceVmIdInput">source_vm_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.excludeDiskLuns">exclude_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.includeDiskLuns">include_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.protectionState">protection_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.sourceVmId">source_vm_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.timeouts"></a>

```python
timeouts: BackupProtectedVmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference">BackupProtectedVmTimeoutsOutputReference</a>

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `exclude_disk_luns_input`<sup>Optional</sup> <a name="exclude_disk_luns_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.excludeDiskLunsInput"></a>

```python
exclude_disk_luns_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_disk_luns_input`<sup>Optional</sup> <a name="include_disk_luns_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.includeDiskLunsInput"></a>

```python
include_disk_luns_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protection_state_input`<sup>Optional</sup> <a name="protection_state_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.protectionStateInput"></a>

```python
protection_state_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_vm_id_input`<sup>Optional</sup> <a name="source_vm_id_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.sourceVmIdInput"></a>

```python
source_vm_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupProtectedVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `exclude_disk_luns`<sup>Required</sup> <a name="exclude_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.excludeDiskLuns"></a>

```python
exclude_disk_luns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_disk_luns`<sup>Required</sup> <a name="include_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.includeDiskLuns"></a>

```python
include_disk_luns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protection_state`<sup>Required</sup> <a name="protection_state" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.protectionState"></a>

```python
protection_state: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source_vm_id`<sup>Required</sup> <a name="source_vm_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.sourceVmId"></a>

```python
source_vm_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupProtectedVmConfig <a name="BackupProtectedVmConfig" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recovery_vault_name: str,
  resource_group_name: str,
  backup_policy_id: str = None,
  exclude_disk_luns: typing.List[typing.Union[int, float]] = None,
  id: str = None,
  include_disk_luns: typing.List[typing.Union[int, float]] = None,
  protection_state: str = None,
  source_vm_id: str = None,
  timeouts: BackupProtectedVmTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#recovery_vault_name BackupProtectedVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#resource_group_name BackupProtectedVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#backup_policy_id BackupProtectedVm#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.excludeDiskLuns">exclude_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#id BackupProtectedVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.includeDiskLuns">include_disk_luns</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#include_disk_luns BackupProtectedVm#include_disk_luns}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.protectionState">protection_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#protection_state BackupProtectedVm#protection_state}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.sourceVmId">source_vm_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#source_vm_id BackupProtectedVm#source_vm_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#recovery_vault_name BackupProtectedVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#resource_group_name BackupProtectedVm#resource_group_name}.

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#backup_policy_id BackupProtectedVm#backup_policy_id}.

---

##### `exclude_disk_luns`<sup>Optional</sup> <a name="exclude_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.excludeDiskLuns"></a>

```python
exclude_disk_luns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#exclude_disk_luns BackupProtectedVm#exclude_disk_luns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#id BackupProtectedVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_disk_luns`<sup>Optional</sup> <a name="include_disk_luns" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.includeDiskLuns"></a>

```python
include_disk_luns: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#include_disk_luns BackupProtectedVm#include_disk_luns}.

---

##### `protection_state`<sup>Optional</sup> <a name="protection_state" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.protectionState"></a>

```python
protection_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#protection_state BackupProtectedVm#protection_state}.

---

##### `source_vm_id`<sup>Optional</sup> <a name="source_vm_id" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.sourceVmId"></a>

```python
source_vm_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#source_vm_id BackupProtectedVm#source_vm_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmConfig.property.timeouts"></a>

```python
timeouts: BackupProtectedVmTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#timeouts BackupProtectedVm#timeouts}

---

### BackupProtectedVmTimeouts <a name="BackupProtectedVmTimeouts" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVmTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#create BackupProtectedVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#delete BackupProtectedVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#read BackupProtectedVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#update BackupProtectedVm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#create BackupProtectedVm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#delete BackupProtectedVm#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#read BackupProtectedVm#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/backup_protected_vm#update BackupProtectedVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupProtectedVmTimeoutsOutputReference <a name="BackupProtectedVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_vm

backupProtectedVm.BackupProtectedVmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupProtectedVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupProtectedVm.BackupProtectedVmTimeouts">BackupProtectedVmTimeouts</a>]

---



