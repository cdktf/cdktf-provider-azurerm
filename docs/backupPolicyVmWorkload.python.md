# `backupPolicyVmWorkload` Submodule <a name="`backupPolicyVmWorkload` Submodule" id="@cdktf/provider-azurerm.backupPolicyVmWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVmWorkload <a name="BackupPolicyVmWorkload" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload azurerm_backup_policy_vm_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkload(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  protection_policy: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy],
  recovery_vault_name: str,
  resource_group_name: str,
  settings: BackupPolicyVmWorkloadSettings,
  workload_type: str,
  id: str = None,
  timeouts: BackupPolicyVmWorkloadTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.protectionPolicy">protection_policy</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]</code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `protection_policy`<sup>Required</sup> <a name="protection_policy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.protectionPolicy"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.settings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.workloadType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy">put_protection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings">put_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_protection_policy` <a name="put_protection_policy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy"></a>

```python
def put_protection_policy(
  value: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putProtectionPolicy.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]

---

##### `put_settings` <a name="put_settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings"></a>

```python
def put_settings(
  time_zone: str,
  compression_enabled: bool | IResolvable = None
) -> None
```

###### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}.

---

###### `compression_enabled`<sup>Optional</sup> <a name="compression_enabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putSettings.parameter.compressionEnabled"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkload.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkload.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkload.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkload.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupPolicyVmWorkload resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupPolicyVmWorkload to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupPolicyVmWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVmWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy">protection_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput">protection_policy_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput">settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `protection_policy`<sup>Required</sup> <a name="protection_policy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicy"></a>

```python
protection_policy: BackupPolicyVmWorkloadProtectionPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList">BackupPolicyVmWorkloadProtectionPolicyList</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settings"></a>

```python
settings: BackupPolicyVmWorkloadSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference">BackupPolicyVmWorkloadSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeouts"></a>

```python
timeouts: BackupPolicyVmWorkloadTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference">BackupPolicyVmWorkloadTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protection_policy_input`<sup>Optional</sup> <a name="protection_policy_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.protectionPolicyInput"></a>

```python
protection_policy_input: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `settings_input`<sup>Optional</sup> <a name="settings_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.settingsInput"></a>

```python
settings_input: BackupPolicyVmWorkloadSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BackupPolicyVmWorkloadTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkload.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmWorkloadConfig <a name="BackupPolicyVmWorkloadConfig" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  protection_policy: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy],
  recovery_vault_name: str,
  resource_group_name: str,
  settings: BackupPolicyVmWorkloadSettings,
  workload_type: str,
  id: str = None,
  timeouts: BackupPolicyVmWorkloadTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy">protection_policy</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]</code> | protection_policy block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | settings block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#name BackupPolicyVmWorkload#name}.

---

##### `protection_policy`<sup>Required</sup> <a name="protection_policy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.protectionPolicy"></a>

```python
protection_policy: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]

protection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#protection_policy BackupPolicyVmWorkload#protection_policy}

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#recovery_vault_name BackupPolicyVmWorkload#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#resource_group_name BackupPolicyVmWorkload#resource_group_name}.

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.settings"></a>

```python
settings: BackupPolicyVmWorkloadSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#settings BackupPolicyVmWorkload#settings}

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#workload_type BackupPolicyVmWorkload#workload_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#id BackupPolicyVmWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadConfig.property.timeouts"></a>

```python
timeouts: BackupPolicyVmWorkloadTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#timeouts BackupPolicyVmWorkload#timeouts}

---

### BackupPolicyVmWorkloadProtectionPolicy <a name="BackupPolicyVmWorkloadProtectionPolicy" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy(
  backup: BackupPolicyVmWorkloadProtectionPolicyBackup,
  policy_type: str,
  retention_daily: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily = None,
  retention_monthly: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly = None,
  retention_weekly: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly = None,
  retention_yearly: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly = None,
  simple_retention: BackupPolicyVmWorkloadProtectionPolicySimpleRetention = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily">retention_daily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly">retention_monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly">retention_weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly">retention_yearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention">simple_retention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | simple_retention block. |

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.backup"></a>

```python
backup: BackupPolicyVmWorkloadProtectionPolicyBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#backup BackupPolicyVmWorkload#backup}

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#policy_type BackupPolicyVmWorkload#policy_type}.

---

##### `retention_daily`<sup>Optional</sup> <a name="retention_daily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionDaily"></a>

```python
retention_daily: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#retention_daily BackupPolicyVmWorkload#retention_daily}

---

##### `retention_monthly`<sup>Optional</sup> <a name="retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionMonthly"></a>

```python
retention_monthly: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#retention_monthly BackupPolicyVmWorkload#retention_monthly}

---

##### `retention_weekly`<sup>Optional</sup> <a name="retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionWeekly"></a>

```python
retention_weekly: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#retention_weekly BackupPolicyVmWorkload#retention_weekly}

---

##### `retention_yearly`<sup>Optional</sup> <a name="retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.retentionYearly"></a>

```python
retention_yearly: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#retention_yearly BackupPolicyVmWorkload#retention_yearly}

---

##### `simple_retention`<sup>Optional</sup> <a name="simple_retention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy.property.simpleRetention"></a>

```python
simple_retention: BackupPolicyVmWorkloadProtectionPolicySimpleRetention
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

simple_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#simple_retention BackupPolicyVmWorkload#simple_retention}

---

### BackupPolicyVmWorkloadProtectionPolicyBackup <a name="BackupPolicyVmWorkloadProtectionPolicyBackup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup(
  frequency: str = None,
  frequency_in_minutes: typing.Union[int, float] = None,
  time: str = None,
  weekdays: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes">frequency_in_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}.

---

##### `frequency_in_minutes`<sup>Optional</sup> <a name="frequency_in_minutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.frequencyInMinutes"></a>

```python
frequency_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}.

---

##### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionDaily <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily(
  count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly(
  count: typing.Union[int, float],
  format_type: str,
  monthdays: typing.List[typing.Union[int, float]] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType">format_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays">monthdays</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.monthdays"></a>

```python
monthdays: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly(
  count: typing.Union[int, float],
  weekdays: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

### BackupPolicyVmWorkloadProtectionPolicyRetentionYearly <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly(
  count: typing.Union[int, float],
  format_type: str,
  months: typing.List[str],
  monthdays: typing.List[typing.Union[int, float]] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType">format_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months">months</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays">monthdays</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}.

---

##### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.monthdays"></a>

```python
monthdays: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

### BackupPolicyVmWorkloadProtectionPolicySimpleRetention <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention(
  count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

### BackupPolicyVmWorkloadSettings <a name="BackupPolicyVmWorkloadSettings" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings(
  time_zone: str,
  compression_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled">compression_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}. |

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time_zone BackupPolicyVmWorkload#time_zone}.

---

##### `compression_enabled`<sup>Optional</sup> <a name="compression_enabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings.property.compressionEnabled"></a>

```python
compression_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#compression_enabled BackupPolicyVmWorkload#compression_enabled}.

---

### BackupPolicyVmWorkloadTimeouts <a name="BackupPolicyVmWorkloadTimeouts" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#create BackupPolicyVmWorkload#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#delete BackupPolicyVmWorkload#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#read BackupPolicyVmWorkload#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#update BackupPolicyVmWorkload#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency">reset_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes">reset_frequency_in_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime">reset_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_frequency` <a name="reset_frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequency"></a>

```python
def reset_frequency() -> None
```

##### `reset_frequency_in_minutes` <a name="reset_frequency_in_minutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetFrequencyInMinutes"></a>

```python
def reset_frequency_in_minutes() -> None
```

##### `reset_time` <a name="reset_time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetTime"></a>

```python
def reset_time() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput">frequency_in_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes">frequency_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_in_minutes_input`<sup>Optional</sup> <a name="frequency_in_minutes_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutesInput"></a>

```python
frequency_in_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `frequency_in_minutes`<sup>Required</sup> <a name="frequency_in_minutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.frequencyInMinutes"></a>

```python
frequency_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicyBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---


### BackupPolicyVmWorkloadProtectionPolicyList <a name="BackupPolicyVmWorkloadProtectionPolicyList" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupPolicyVmWorkloadProtectionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BackupPolicyVmWorkloadProtectionPolicy]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>]

---


### BackupPolicyVmWorkloadProtectionPolicyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily">put_retention_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly">put_retention_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly">put_retention_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly">put_retention_yearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention">put_simple_retention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily">reset_retention_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly">reset_retention_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly">reset_retention_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly">reset_retention_yearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention">reset_simple_retention</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup` <a name="put_backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup"></a>

```python
def put_backup(
  frequency: str = None,
  frequency_in_minutes: typing.Union[int, float] = None,
  time: str = None,
  weekdays: typing.List[str] = None
) -> None
```

###### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency BackupPolicyVmWorkload#frequency}.

---

###### `frequency_in_minutes`<sup>Optional</sup> <a name="frequency_in_minutes" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.frequencyInMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#frequency_in_minutes BackupPolicyVmWorkload#frequency_in_minutes}.

---

###### `time`<sup>Optional</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#time BackupPolicyVmWorkload#time}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putBackup.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `put_retention_daily` <a name="put_retention_daily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily"></a>

```python
def put_retention_daily(
  count: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionDaily.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `put_retention_monthly` <a name="put_retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly"></a>

```python
def put_retention_monthly(
  count: typing.Union[int, float],
  format_type: str,
  monthdays: typing.List[typing.Union[int, float]] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

###### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.formatType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

###### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.monthdays"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

###### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionMonthly.parameter.weeks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

##### `put_retention_weekly` <a name="put_retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly"></a>

```python
def put_retention_weekly(
  count: typing.Union[int, float],
  weekdays: typing.List[str]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

###### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionWeekly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

##### `put_retention_yearly` <a name="put_retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly"></a>

```python
def put_retention_yearly(
  count: typing.Union[int, float],
  format_type: str,
  months: typing.List[str],
  monthdays: typing.List[typing.Union[int, float]] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

###### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.formatType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#format_type BackupPolicyVmWorkload#format_type}.

---

###### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.months"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#months BackupPolicyVmWorkload#months}.

---

###### `monthdays`<sup>Optional</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.monthdays"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#monthdays BackupPolicyVmWorkload#monthdays}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weekdays BackupPolicyVmWorkload#weekdays}.

---

###### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putRetentionYearly.parameter.weeks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#weeks BackupPolicyVmWorkload#weeks}.

---

##### `put_simple_retention` <a name="put_simple_retention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention"></a>

```python
def put_simple_retention(
  count: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.putSimpleRetention.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/backup_policy_vm_workload#count BackupPolicyVmWorkload#count}.

---

##### `reset_retention_daily` <a name="reset_retention_daily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionDaily"></a>

```python
def reset_retention_daily() -> None
```

##### `reset_retention_monthly` <a name="reset_retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionMonthly"></a>

```python
def reset_retention_monthly() -> None
```

##### `reset_retention_weekly` <a name="reset_retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionWeekly"></a>

```python
def reset_retention_weekly() -> None
```

##### `reset_retention_yearly` <a name="reset_retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetRetentionYearly"></a>

```python
def reset_retention_yearly() -> None
```

##### `reset_simple_retention` <a name="reset_simple_retention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.resetSimpleRetention"></a>

```python
def reset_simple_retention() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily">retention_daily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly">retention_monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly">retention_weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly">retention_yearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention">simple_retention</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput">retention_daily_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput">retention_monthly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput">retention_weekly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput">retention_yearly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput">simple_retention_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backup"></a>

```python
backup: BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference">BackupPolicyVmWorkloadProtectionPolicyBackupOutputReference</a>

---

##### `retention_daily`<sup>Required</sup> <a name="retention_daily" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDaily"></a>

```python
retention_daily: BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference</a>

---

##### `retention_monthly`<sup>Required</sup> <a name="retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthly"></a>

```python
retention_monthly: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference</a>

---

##### `retention_weekly`<sup>Required</sup> <a name="retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeekly"></a>

```python
retention_weekly: BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference</a>

---

##### `retention_yearly`<sup>Required</sup> <a name="retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearly"></a>

```python
retention_yearly: BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference">BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference</a>

---

##### `simple_retention`<sup>Required</sup> <a name="simple_retention" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetention"></a>

```python
simple_retention: BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference">BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.backupInput"></a>

```python
backup_input: BackupPolicyVmWorkloadProtectionPolicyBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyBackup">BackupPolicyVmWorkloadProtectionPolicyBackup</a>

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `retention_daily_input`<sup>Optional</sup> <a name="retention_daily_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionDailyInput"></a>

```python
retention_daily_input: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---

##### `retention_monthly_input`<sup>Optional</sup> <a name="retention_monthly_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionMonthlyInput"></a>

```python
retention_monthly_input: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---

##### `retention_weekly_input`<sup>Optional</sup> <a name="retention_weekly_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionWeeklyInput"></a>

```python
retention_weekly_input: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---

##### `retention_yearly_input`<sup>Optional</sup> <a name="retention_yearly_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.retentionYearlyInput"></a>

```python
retention_yearly_input: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---

##### `simple_retention_input`<sup>Optional</sup> <a name="simple_retention_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.simpleRetentionInput"></a>

```python
simple_retention_input: BackupPolicyVmWorkloadProtectionPolicySimpleRetention
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupPolicyVmWorkloadProtectionPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicy">BackupPolicyVmWorkloadProtectionPolicy</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDailyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicyRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionDaily">BackupPolicyVmWorkloadProtectionPolicyRetentionDaily</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays">reset_monthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks">reset_weeks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_monthdays` <a name="reset_monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetMonthdays"></a>

```python
def reset_monthdays() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```

##### `reset_weeks` <a name="reset_weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.resetWeeks"></a>

```python
def reset_weeks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput">format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput">monthdays_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput">weeks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays">monthdays</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `format_type_input`<sup>Optional</sup> <a name="format_type_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatTypeInput"></a>

```python
format_type_input: str
```

- *Type:* str

---

##### `monthdays_input`<sup>Optional</sup> <a name="monthdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdaysInput"></a>

```python
monthdays_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_input`<sup>Optional</sup> <a name="weeks_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeksInput"></a>

```python
weeks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.monthdays"></a>

```python
monthdays: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly">BackupPolicyVmWorkloadProtectionPolicyRetentionMonthly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly">BackupPolicyVmWorkloadProtectionPolicyRetentionWeekly</a>

---


### BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays">reset_monthdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks">reset_weeks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_monthdays` <a name="reset_monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetMonthdays"></a>

```python
def reset_monthdays() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```

##### `reset_weeks` <a name="reset_weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.resetWeeks"></a>

```python
def reset_weeks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput">format_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput">monthdays_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput">weeks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType">format_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays">monthdays</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `format_type_input`<sup>Optional</sup> <a name="format_type_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatTypeInput"></a>

```python
format_type_input: str
```

- *Type:* str

---

##### `monthdays_input`<sup>Optional</sup> <a name="monthdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdaysInput"></a>

```python
monthdays_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_input`<sup>Optional</sup> <a name="weeks_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeksInput"></a>

```python
weeks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `format_type`<sup>Required</sup> <a name="format_type" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.formatType"></a>

```python
format_type: str
```

- *Type:* str

---

##### `monthdays`<sup>Required</sup> <a name="monthdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.monthdays"></a>

```python
monthdays: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearlyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicyRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicyRetentionYearly">BackupPolicyVmWorkloadProtectionPolicyRetentionYearly</a>

---


### BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference <a name="BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetentionOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadProtectionPolicySimpleRetention
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadProtectionPolicySimpleRetention">BackupPolicyVmWorkloadProtectionPolicySimpleRetention</a>

---


### BackupPolicyVmWorkloadSettingsOutputReference <a name="BackupPolicyVmWorkloadSettingsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled">reset_compression_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compression_enabled` <a name="reset_compression_enabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.resetCompressionEnabled"></a>

```python
def reset_compression_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput">compression_enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled">compression_enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compression_enabled_input`<sup>Optional</sup> <a name="compression_enabled_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabledInput"></a>

```python
compression_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `compression_enabled`<sup>Required</sup> <a name="compression_enabled" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.compressionEnabled"></a>

```python
compression_enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettingsOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmWorkloadSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadSettings">BackupPolicyVmWorkloadSettings</a>

---


### BackupPolicyVmWorkloadTimeoutsOutputReference <a name="BackupPolicyVmWorkloadTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm_workload

backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupPolicyVmWorkloadTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupPolicyVmWorkload.BackupPolicyVmWorkloadTimeouts">BackupPolicyVmWorkloadTimeouts</a>

---



