# `backupProtectedFileShare` Submodule <a name="`backupProtectedFileShare` Submodule" id="@cdktf/provider-azurerm.backupProtectedFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupProtectedFileShare <a name="BackupProtectedFileShare" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share azurerm_backup_protected_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShare(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  recovery_vault_name: str,
  resource_group_name: str,
  source_file_share_name: str,
  source_storage_account_id: str,
  id: str = None,
  timeouts: BackupProtectedFileShareTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.sourceFileShareName">source_file_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.sourceStorageAccountId">source_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}.

---

##### `source_file_share_name`<sup>Required</sup> <a name="source_file_share_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.sourceFileShareName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}.

---

##### `source_storage_account_id`<sup>Required</sup> <a name="source_storage_account_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.sourceStorageAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#timeouts BackupProtectedFileShare#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#create BackupProtectedFileShare#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#delete BackupProtectedFileShare#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#read BackupProtectedFileShare#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#update BackupProtectedFileShare#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupProtectedFileShare resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShare.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShare.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShare.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShare.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupProtectedFileShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupProtectedFileShare to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupProtectedFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupProtectedFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference">BackupProtectedFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareNameInput">source_file_share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountIdInput">source_storage_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareName">source_file_share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountId">source_storage_account_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeouts"></a>

```python
timeouts: BackupProtectedFileShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference">BackupProtectedFileShareTimeoutsOutputReference</a>

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_file_share_name_input`<sup>Optional</sup> <a name="source_file_share_name_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareNameInput"></a>

```python
source_file_share_name_input: str
```

- *Type:* str

---

##### `source_storage_account_id_input`<sup>Optional</sup> <a name="source_storage_account_id_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountIdInput"></a>

```python
source_storage_account_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BackupProtectedFileShareTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source_file_share_name`<sup>Required</sup> <a name="source_file_share_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceFileShareName"></a>

```python
source_file_share_name: str
```

- *Type:* str

---

##### `source_storage_account_id`<sup>Required</sup> <a name="source_storage_account_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.sourceStorageAccountId"></a>

```python
source_storage_account_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShare.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupProtectedFileShareConfig <a name="BackupProtectedFileShareConfig" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShareConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_policy_id: str,
  recovery_vault_name: str,
  resource_group_name: str,
  source_file_share_name: str,
  source_storage_account_id: str,
  id: str = None,
  timeouts: BackupProtectedFileShareTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceFileShareName">source_file_share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceStorageAccountId">source_storage_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#backup_policy_id BackupProtectedFileShare#backup_policy_id}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#recovery_vault_name BackupProtectedFileShare#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#resource_group_name BackupProtectedFileShare#resource_group_name}.

---

##### `source_file_share_name`<sup>Required</sup> <a name="source_file_share_name" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceFileShareName"></a>

```python
source_file_share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_file_share_name BackupProtectedFileShare#source_file_share_name}.

---

##### `source_storage_account_id`<sup>Required</sup> <a name="source_storage_account_id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.sourceStorageAccountId"></a>

```python
source_storage_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#source_storage_account_id BackupProtectedFileShare#source_storage_account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#id BackupProtectedFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareConfig.property.timeouts"></a>

```python
timeouts: BackupProtectedFileShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#timeouts BackupProtectedFileShare#timeouts}

---

### BackupProtectedFileShareTimeouts <a name="BackupProtectedFileShareTimeouts" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShareTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#create BackupProtectedFileShare#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#delete BackupProtectedFileShare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#read BackupProtectedFileShare#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#update BackupProtectedFileShare#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#create BackupProtectedFileShare#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#delete BackupProtectedFileShare#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#read BackupProtectedFileShare#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/backup_protected_file_share#update BackupProtectedFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupProtectedFileShareTimeoutsOutputReference <a name="BackupProtectedFileShareTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_protected_file_share

backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BackupProtectedFileShareTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.backupProtectedFileShare.BackupProtectedFileShareTimeouts">BackupProtectedFileShareTimeouts</a>

---



