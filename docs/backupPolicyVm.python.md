# `backupPolicyVm` Submodule <a name="`backupPolicyVm` Submodule" id="@cdktf/provider-azurerm.backupPolicyVm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyVm <a name="BackupPolicyVm" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm azurerm_backup_policy_vm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup: BackupPolicyVmBackup,
  name: str,
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  instant_restore_resource_group: BackupPolicyVmInstantRestoreResourceGroup = None,
  instant_restore_retention_days: typing.Union[int, float] = None,
  policy_type: str = None,
  retention_daily: BackupPolicyVmRetentionDaily = None,
  retention_monthly: BackupPolicyVmRetentionMonthly = None,
  retention_weekly: BackupPolicyVmRetentionWeekly = None,
  retention_yearly: BackupPolicyVmRetentionYearly = None,
  timeouts: BackupPolicyVmTimeouts = None,
  timezone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.instantRestoreResourceGroup">instant_restore_resource_group</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | instant_restore_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.instantRestoreRetentionDays">instant_restore_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionDaily">retention_daily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionMonthly">retention_monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionWeekly">retention_weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionYearly">retention_yearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.backup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#backup BackupPolicyVm#backup}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instant_restore_resource_group`<sup>Optional</sup> <a name="instant_restore_resource_group" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.instantRestoreResourceGroup"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

instant_restore_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_resource_group BackupPolicyVm#instant_restore_resource_group}

---

##### `instant_restore_retention_days`<sup>Optional</sup> <a name="instant_restore_retention_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.instantRestoreRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.policyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}.

---

##### `retention_daily`<sup>Optional</sup> <a name="retention_daily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionDaily"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_daily BackupPolicyVm#retention_daily}

---

##### `retention_monthly`<sup>Optional</sup> <a name="retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionMonthly"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_monthly BackupPolicyVm#retention_monthly}

---

##### `retention_weekly`<sup>Optional</sup> <a name="retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionWeekly"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_weekly BackupPolicyVm#retention_weekly}

---

##### `retention_yearly`<sup>Optional</sup> <a name="retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.retentionYearly"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_yearly BackupPolicyVm#retention_yearly}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timeouts BackupPolicyVm#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.Initializer.parameter.timezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup">put_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup">put_instant_restore_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily">put_retention_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly">put_retention_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly">put_retention_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly">put_retention_yearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup">reset_instant_restore_resource_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays">reset_instant_restore_retention_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType">reset_policy_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily">reset_retention_daily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly">reset_retention_monthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly">reset_retention_weekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly">reset_retention_yearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup` <a name="put_backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup"></a>

```python
def put_backup(
  frequency: str,
  time: str,
  hour_duration: typing.Union[int, float] = None,
  hour_interval: typing.Union[int, float] = None,
  weekdays: typing.List[str] = None
) -> None
```

###### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.frequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}.

---

###### `hour_duration`<sup>Optional</sup> <a name="hour_duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.hourDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}.

---

###### `hour_interval`<sup>Optional</sup> <a name="hour_interval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.hourInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putBackup.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `put_instant_restore_resource_group` <a name="put_instant_restore_resource_group" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup"></a>

```python
def put_instant_restore_resource_group(
  prefix: str,
  suffix: str = None
) -> None
```

###### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}.

---

###### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putInstantRestoreResourceGroup.parameter.suffix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}.

---

##### `put_retention_daily` <a name="put_retention_daily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily"></a>

```python
def put_retention_daily(
  count: typing.Union[int, float]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionDaily.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `put_retention_monthly` <a name="put_retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly"></a>

```python
def put_retention_monthly(
  count: typing.Union[int, float],
  days: typing.List[typing.Union[int, float]] = None,
  include_last_days: typing.Union[bool, IResolvable] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.days"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

###### `include_last_days`<sup>Optional</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.includeLastDays"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

###### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionMonthly.parameter.weeks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

##### `put_retention_weekly` <a name="put_retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly"></a>

```python
def put_retention_weekly(
  count: typing.Union[int, float],
  weekdays: typing.List[str]
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

###### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionWeekly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `put_retention_yearly` <a name="put_retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly"></a>

```python
def put_retention_yearly(
  count: typing.Union[int, float],
  months: typing.List[str],
  days: typing.List[typing.Union[int, float]] = None,
  include_last_days: typing.Union[bool, IResolvable] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
) -> None
```

###### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.count"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

###### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.months"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}.

---

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.days"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

###### `include_last_days`<sup>Optional</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.includeLastDays"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

###### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.weekdays"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

###### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putRetentionYearly.parameter.weeks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instant_restore_resource_group` <a name="reset_instant_restore_resource_group" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreResourceGroup"></a>

```python
def reset_instant_restore_resource_group() -> None
```

##### `reset_instant_restore_retention_days` <a name="reset_instant_restore_retention_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetInstantRestoreRetentionDays"></a>

```python
def reset_instant_restore_retention_days() -> None
```

##### `reset_policy_type` <a name="reset_policy_type" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetPolicyType"></a>

```python
def reset_policy_type() -> None
```

##### `reset_retention_daily` <a name="reset_retention_daily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionDaily"></a>

```python
def reset_retention_daily() -> None
```

##### `reset_retention_monthly` <a name="reset_retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionMonthly"></a>

```python
def reset_retention_monthly() -> None
```

##### `reset_retention_weekly` <a name="reset_retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionWeekly"></a>

```python
def reset_retention_weekly() -> None
```

##### `reset_retention_yearly` <a name="reset_retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetRetentionYearly"></a>

```python
def reset_retention_yearly() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.resetTimezone"></a>

```python
def reset_timezone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupPolicyVm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupPolicyVm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupPolicyVm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyVm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup">instant_restore_resource_group</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily">retention_daily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly">retention_monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly">retention_weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly">retention_yearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput">backup_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput">instant_restore_resource_group_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput">instant_restore_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput">policy_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput">retention_daily_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput">retention_monthly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput">retention_weekly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput">retention_yearly_input</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays">instant_restore_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backup"></a>

```python
backup: BackupPolicyVmBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference">BackupPolicyVmBackupOutputReference</a>

---

##### `instant_restore_resource_group`<sup>Required</sup> <a name="instant_restore_resource_group" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroup"></a>

```python
instant_restore_resource_group: BackupPolicyVmInstantRestoreResourceGroupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference">BackupPolicyVmInstantRestoreResourceGroupOutputReference</a>

---

##### `retention_daily`<sup>Required</sup> <a name="retention_daily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDaily"></a>

```python
retention_daily: BackupPolicyVmRetentionDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference">BackupPolicyVmRetentionDailyOutputReference</a>

---

##### `retention_monthly`<sup>Required</sup> <a name="retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthly"></a>

```python
retention_monthly: BackupPolicyVmRetentionMonthlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference">BackupPolicyVmRetentionMonthlyOutputReference</a>

---

##### `retention_weekly`<sup>Required</sup> <a name="retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeekly"></a>

```python
retention_weekly: BackupPolicyVmRetentionWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference">BackupPolicyVmRetentionWeeklyOutputReference</a>

---

##### `retention_yearly`<sup>Required</sup> <a name="retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearly"></a>

```python
retention_yearly: BackupPolicyVmRetentionYearlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference">BackupPolicyVmRetentionYearlyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeouts"></a>

```python
timeouts: BackupPolicyVmTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference">BackupPolicyVmTimeoutsOutputReference</a>

---

##### `backup_input`<sup>Optional</sup> <a name="backup_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.backupInput"></a>

```python
backup_input: BackupPolicyVmBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instant_restore_resource_group_input`<sup>Optional</sup> <a name="instant_restore_resource_group_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreResourceGroupInput"></a>

```python
instant_restore_resource_group_input: BackupPolicyVmInstantRestoreResourceGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---

##### `instant_restore_retention_days_input`<sup>Optional</sup> <a name="instant_restore_retention_days_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDaysInput"></a>

```python
instant_restore_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policy_type_input`<sup>Optional</sup> <a name="policy_type_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyTypeInput"></a>

```python
policy_type_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `retention_daily_input`<sup>Optional</sup> <a name="retention_daily_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionDailyInput"></a>

```python
retention_daily_input: BackupPolicyVmRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---

##### `retention_monthly_input`<sup>Optional</sup> <a name="retention_monthly_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionMonthlyInput"></a>

```python
retention_monthly_input: BackupPolicyVmRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---

##### `retention_weekly_input`<sup>Optional</sup> <a name="retention_weekly_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionWeeklyInput"></a>

```python
retention_weekly_input: BackupPolicyVmRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---

##### `retention_yearly_input`<sup>Optional</sup> <a name="retention_yearly_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.retentionYearlyInput"></a>

```python
retention_yearly_input: BackupPolicyVmRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupPolicyVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>]

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instant_restore_retention_days`<sup>Required</sup> <a name="instant_restore_retention_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.instantRestoreRetentionDays"></a>

```python
instant_restore_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyVmBackup <a name="BackupPolicyVmBackup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmBackup(
  frequency: str,
  time: str,
  hour_duration: typing.Union[int, float] = None,
  hour_interval: typing.Union[int, float] = None,
  weekdays: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency">frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration">hour_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval">hour_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#frequency BackupPolicyVm#frequency}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#time BackupPolicyVm#time}.

---

##### `hour_duration`<sup>Optional</sup> <a name="hour_duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourDuration"></a>

```python
hour_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_duration BackupPolicyVm#hour_duration}.

---

##### `hour_interval`<sup>Optional</sup> <a name="hour_interval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.hourInterval"></a>

```python
hour_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#hour_interval BackupPolicyVm#hour_interval}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmConfig <a name="BackupPolicyVmConfig" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup: BackupPolicyVmBackup,
  name: str,
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  instant_restore_resource_group: BackupPolicyVmInstantRestoreResourceGroup = None,
  instant_restore_retention_days: typing.Union[int, float] = None,
  policy_type: str = None,
  retention_daily: BackupPolicyVmRetentionDaily = None,
  retention_monthly: BackupPolicyVmRetentionMonthly = None,
  retention_weekly: BackupPolicyVmRetentionWeekly = None,
  retention_yearly: BackupPolicyVmRetentionYearly = None,
  timeouts: BackupPolicyVmTimeouts = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup">backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup">instant_restore_resource_group</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | instant_restore_resource_group block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays">instant_restore_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType">policy_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily">retention_daily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly">retention_monthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly">retention_weekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly">retention_yearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone">timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup`<sup>Required</sup> <a name="backup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.backup"></a>

```python
backup: BackupPolicyVmBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#backup BackupPolicyVm#backup}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#name BackupPolicyVm#name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#recovery_vault_name BackupPolicyVm#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#resource_group_name BackupPolicyVm#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#id BackupPolicyVm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instant_restore_resource_group`<sup>Optional</sup> <a name="instant_restore_resource_group" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreResourceGroup"></a>

```python
instant_restore_resource_group: BackupPolicyVmInstantRestoreResourceGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

instant_restore_resource_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_resource_group BackupPolicyVm#instant_restore_resource_group}

---

##### `instant_restore_retention_days`<sup>Optional</sup> <a name="instant_restore_retention_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.instantRestoreRetentionDays"></a>

```python
instant_restore_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#instant_restore_retention_days BackupPolicyVm#instant_restore_retention_days}.

---

##### `policy_type`<sup>Optional</sup> <a name="policy_type" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#policy_type BackupPolicyVm#policy_type}.

---

##### `retention_daily`<sup>Optional</sup> <a name="retention_daily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionDaily"></a>

```python
retention_daily: BackupPolicyVmRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_daily BackupPolicyVm#retention_daily}

---

##### `retention_monthly`<sup>Optional</sup> <a name="retention_monthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionMonthly"></a>

```python
retention_monthly: BackupPolicyVmRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_monthly BackupPolicyVm#retention_monthly}

---

##### `retention_weekly`<sup>Optional</sup> <a name="retention_weekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionWeekly"></a>

```python
retention_weekly: BackupPolicyVmRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_weekly BackupPolicyVm#retention_weekly}

---

##### `retention_yearly`<sup>Optional</sup> <a name="retention_yearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.retentionYearly"></a>

```python
retention_yearly: BackupPolicyVmRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#retention_yearly BackupPolicyVm#retention_yearly}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timeouts"></a>

```python
timeouts: BackupPolicyVmTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timeouts BackupPolicyVm#timeouts}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#timezone BackupPolicyVm#timezone}.

---

### BackupPolicyVmInstantRestoreResourceGroup <a name="BackupPolicyVmInstantRestoreResourceGroup" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup(
  prefix: str,
  suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix">suffix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#prefix BackupPolicyVm#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#suffix BackupPolicyVm#suffix}.

---

### BackupPolicyVmRetentionDaily <a name="BackupPolicyVmRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionDaily(
  count: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

### BackupPolicyVmRetentionMonthly <a name="BackupPolicyVmRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionMonthly(
  count: typing.Union[int, float],
  days: typing.List[typing.Union[int, float]] = None,
  include_last_days: typing.Union[bool, IResolvable] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays">include_last_days</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `include_last_days`<sup>Optional</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.includeLastDays"></a>

```python
include_last_days: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmRetentionWeekly <a name="BackupPolicyVmRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionWeekly(
  count: typing.Union[int, float],
  weekdays: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

### BackupPolicyVmRetentionYearly <a name="BackupPolicyVmRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionYearly(
  count: typing.Union[int, float],
  months: typing.List[str],
  days: typing.List[typing.Union[int, float]] = None,
  include_last_days: typing.Union[bool, IResolvable] = None,
  weekdays: typing.List[str] = None,
  weeks: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count">count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months">months</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays">include_last_days</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}. |

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#count BackupPolicyVm#count}.

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#months BackupPolicyVm#months}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#days BackupPolicyVm#days}.

---

##### `include_last_days`<sup>Optional</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.includeLastDays"></a>

```python
include_last_days: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#include_last_days BackupPolicyVm#include_last_days}.

---

##### `weekdays`<sup>Optional</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weekdays BackupPolicyVm#weekdays}.

---

##### `weeks`<sup>Optional</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#weeks BackupPolicyVm#weeks}.

---

### BackupPolicyVmTimeouts <a name="BackupPolicyVmTimeouts" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#create BackupPolicyVm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#delete BackupPolicyVm#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#read BackupPolicyVm#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/backup_policy_vm#update BackupPolicyVm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyVmBackupOutputReference <a name="BackupPolicyVmBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration">reset_hour_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval">reset_hour_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hour_duration` <a name="reset_hour_duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourDuration"></a>

```python
def reset_hour_duration() -> None
```

##### `reset_hour_interval` <a name="reset_hour_interval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetHourInterval"></a>

```python
def reset_hour_interval() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput">frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput">hour_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput">hour_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency">frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration">hour_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval">hour_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `frequency_input`<sup>Optional</sup> <a name="frequency_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequencyInput"></a>

```python
frequency_input: str
```

- *Type:* str

---

##### `hour_duration_input`<sup>Optional</sup> <a name="hour_duration_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDurationInput"></a>

```python
hour_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_interval_input`<sup>Optional</sup> <a name="hour_interval_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourIntervalInput"></a>

```python
hour_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.frequency"></a>

```python
frequency: str
```

- *Type:* str

---

##### `hour_duration`<sup>Required</sup> <a name="hour_duration" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourDuration"></a>

```python
hour_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour_interval`<sup>Required</sup> <a name="hour_interval" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.hourInterval"></a>

```python
hour_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackupOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmBackup">BackupPolicyVmBackup</a>

---


### BackupPolicyVmInstantRestoreResourceGroupOutputReference <a name="BackupPolicyVmInstantRestoreResourceGroupOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix">reset_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_suffix` <a name="reset_suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.resetSuffix"></a>

```python
def reset_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput">suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix">suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `suffix_input`<sup>Optional</sup> <a name="suffix_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffixInput"></a>

```python
suffix_input: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.suffix"></a>

```python
suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroupOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmInstantRestoreResourceGroup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmInstantRestoreResourceGroup">BackupPolicyVmInstantRestoreResourceGroup</a>

---


### BackupPolicyVmRetentionDailyOutputReference <a name="BackupPolicyVmRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDailyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionDaily">BackupPolicyVmRetentionDaily</a>

---


### BackupPolicyVmRetentionMonthlyOutputReference <a name="BackupPolicyVmRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays">reset_include_last_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks">reset_weeks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_include_last_days` <a name="reset_include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```python
def reset_include_last_days() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```

##### `reset_weeks` <a name="reset_weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.resetWeeks"></a>

```python
def reset_weeks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput">include_last_days_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput">weeks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays">include_last_days</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.daysInput"></a>

```python
days_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_last_days_input`<sup>Optional</sup> <a name="include_last_days_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```python
include_last_days_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_input`<sup>Optional</sup> <a name="weeks_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeksInput"></a>

```python
weeks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_last_days`<sup>Required</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.includeLastDays"></a>

```python
include_last_days: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthlyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionMonthly">BackupPolicyVmRetentionMonthly</a>

---


### BackupPolicyVmRetentionWeeklyOutputReference <a name="BackupPolicyVmRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeeklyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionWeekly">BackupPolicyVmRetentionWeekly</a>

---


### BackupPolicyVmRetentionYearlyOutputReference <a name="BackupPolicyVmRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays">reset_include_last_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays">reset_weekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks">reset_weeks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_include_last_days` <a name="reset_include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```python
def reset_include_last_days() -> None
```

##### `reset_weekdays` <a name="reset_weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeekdays"></a>

```python
def reset_weekdays() -> None
```

##### `reset_weeks` <a name="reset_weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.resetWeeks"></a>

```python
def reset_weeks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput">count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput">days_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput">include_last_days_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput">months_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput">weekdays_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput">weeks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days">days</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays">include_last_days</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months">months</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays">weekdays</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks">weeks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count_input`<sup>Optional</sup> <a name="count_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.countInput"></a>

```python
count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.daysInput"></a>

```python
days_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_last_days_input`<sup>Optional</sup> <a name="include_last_days_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```python
include_last_days_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `months_input`<sup>Optional</sup> <a name="months_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.monthsInput"></a>

```python
months_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekdays_input`<sup>Optional</sup> <a name="weekdays_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdaysInput"></a>

```python
weekdays_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_input`<sup>Optional</sup> <a name="weeks_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeksInput"></a>

```python
weeks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.days"></a>

```python
days: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `include_last_days`<sup>Required</sup> <a name="include_last_days" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.includeLastDays"></a>

```python
include_last_days: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.months"></a>

```python
months: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weekdays`<sup>Required</sup> <a name="weekdays" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weekdays"></a>

```python
weekdays: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks`<sup>Required</sup> <a name="weeks" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.weeks"></a>

```python
weeks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearlyOutputReference.property.internalValue"></a>

```python
internal_value: BackupPolicyVmRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmRetentionYearly">BackupPolicyVmRetentionYearly</a>

---


### BackupPolicyVmTimeoutsOutputReference <a name="BackupPolicyVmTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import backup_policy_vm

backupPolicyVm.BackupPolicyVmTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupPolicyVmTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.backupPolicyVm.BackupPolicyVmTimeouts">BackupPolicyVmTimeouts</a>]

---



