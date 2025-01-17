# `dataProtectionBackupPolicyMysqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServer <a name="DataProtectionBackupPolicyMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server azurerm_data_protection_backup_policy_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_repeating_time_intervals: typing.List[str],
  default_retention_rule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule,
  name: str,
  vault_id: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.backupRepeatingTimeIntervals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.defaultRetentionRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#default_retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.retentionRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#timeouts DataProtectionBackupPolicyMysqlFlexibleServer#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule">put_default_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule">put_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule">reset_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_retention_rule` <a name="put_default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule"></a>

```python
def put_default_retention_rule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule.parameter.lifeCycle"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

##### `put_retention_rule` <a name="put_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule"></a>

```python
def put_retention_rule(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_rule` <a name="reset_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule"></a>

```python
def reset_retention_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupPolicyMysqlFlexibleServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupPolicyMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule">retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">backup_repeating_time_intervals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput">default_retention_rule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput">retention_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `retention_rule`<sup>Required</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule"></a>

```python
retention_rule: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backup_repeating_time_intervals_input`<sup>Optional</sup> <a name="backup_repeating_time_intervals_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```python
backup_repeating_time_intervals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_retention_rule_input`<sup>Optional</sup> <a name="default_retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```python
default_retention_rule_input: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_rule_input`<sup>Optional</sup> <a name="retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput"></a>

```python
retention_rule_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataProtectionBackupPolicyMysqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerConfig <a name="DataProtectionBackupPolicyMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_repeating_time_intervals: typing.List[str],
  default_retention_rule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule,
  name: str,
  vault_id: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#default_retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule"></a>

```python
retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyMysqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#timeouts DataProtectionBackupPolicyMysqlFlexibleServer#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule(
  criteria: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria,
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]],
  name: str,
  priority: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#criteria DataProtectionBackupPolicyMysqlFlexibleServer#criteria}

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria(
  absolute_criteria: str = None,
  days_of_week: typing.List[str] = None,
  months_of_year: typing.List[str] = None,
  scheduled_backup_times: typing.List[str] = None,
  weeks_of_month: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}. |

---

##### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}.

---

##### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}.

---

##### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">reset_absolute_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">reset_months_of_year</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">reset_scheduled_backup_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absolute_criteria` <a name="reset_absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```python
def reset_absolute_criteria() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_months_of_year` <a name="reset_months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```python
def reset_months_of_year() -> None
```

##### `reset_scheduled_backup_times` <a name="reset_scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```python
def reset_scheduled_backup_times() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absolute_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">months_of_year_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduled_backup_times_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_criteria_input`<sup>Optional</sup> <a name="absolute_criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```python
absolute_criteria_input: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year_input`<sup>Optional</sup> <a name="months_of_year_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```python
months_of_year_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times_input`<sup>Optional</sup> <a name="scheduled_backup_times_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```python
scheduled_backup_times_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `absolute_criteria`<sup>Required</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year`<sup>Required</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times`<sup>Required</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```python
def put_criteria(
  absolute_criteria: str = None,
  days_of_week: typing.List[str] = None,
  months_of_year: typing.List[str] = None,
  scheduled_backup_times: typing.List[str] = None,
  weeks_of_month: typing.List[str] = None
) -> None
```

###### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.absoluteCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}.

---

###### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.monthsOfYear"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}.

---

###### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.scheduledBackupTimes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}.

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.weeksOfMonth"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}.

---

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```python
criteria_input: DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>]

---


### DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_mysql_flexible_server

dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyMysqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>]

---



