# `dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServer <a name="DataProtectionBackupPolicyPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server azurerm_data_protection_backup_policy_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer(
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
  default_retention_rule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule,
  name: str,
  vault_id: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.backupRepeatingTimeIntervals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.defaultRetentionRule"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#default_retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.retentionRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#timeouts DataProtectionBackupPolicyPostgresqlFlexibleServer#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule">put_default_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule">put_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule">reset_retention_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_retention_rule` <a name="put_default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule"></a>

```python
def put_default_retention_rule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule.parameter.lifeCycle"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

##### `put_retention_rule` <a name="put_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule"></a>

```python
def put_retention_rule(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_rule` <a name="reset_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule"></a>

```python
def reset_retention_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataProtectionBackupPolicyPostgresqlFlexibleServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataProtectionBackupPolicyPostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyPostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule">retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">backup_repeating_time_intervals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput">default_retention_rule_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput">retention_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `retention_rule`<sup>Required</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule"></a>

```python
retention_rule: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `backup_repeating_time_intervals_input`<sup>Optional</sup> <a name="backup_repeating_time_intervals_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```python
backup_repeating_time_intervals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_retention_rule_input`<sup>Optional</sup> <a name="default_retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```python
default_retention_rule_input: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `retention_rule_input`<sup>Optional</sup> <a name="retention_rule_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput"></a>

```python
retention_rule_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerConfig <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_repeating_time_intervals: typing.List[str],
  default_retention_rule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule,
  name: str,
  vault_id: str,
  id: str = None,
  retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]] = None,
  timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">backup_repeating_time_intervals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule">default_retention_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule">retention_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_repeating_time_intervals`<sup>Required</sup> <a name="backup_repeating_time_intervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```python
backup_repeating_time_intervals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `default_retention_rule`<sup>Required</sup> <a name="default_retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```python
default_retention_rule: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#default_retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#default_retention_rule}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_rule`<sup>Optional</sup> <a name="retention_rule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule"></a>

```python
retention_rule: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#retention_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts"></a>

```python
timeouts: DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#timeouts DataProtectionBackupPolicyPostgresqlFlexibleServer#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule(
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule(
  criteria: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria,
  life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]],
  name: str,
  priority: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle">life_cycle</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}. |

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#criteria}

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```python
life_cycle: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria(
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
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}. |

---

##### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}.

---

##### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}.

---

##### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}.

---

##### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}.

---

##### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle(
  data_store_type: str,
  duration: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">data_store_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration">duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```python
duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">reset_absolute_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">reset_days_of_week</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">reset_months_of_year</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">reset_scheduled_backup_times</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">reset_weeks_of_month</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_absolute_criteria` <a name="reset_absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```python
def reset_absolute_criteria() -> None
```

##### `reset_days_of_week` <a name="reset_days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```python
def reset_days_of_week() -> None
```

##### `reset_months_of_year` <a name="reset_months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```python
def reset_months_of_year() -> None
```

##### `reset_scheduled_backup_times` <a name="reset_scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```python
def reset_scheduled_backup_times() -> None
```

##### `reset_weeks_of_month` <a name="reset_weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```python
def reset_weeks_of_month() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">absolute_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">days_of_week_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">months_of_year_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">scheduled_backup_times_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">weeks_of_month_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">absolute_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">days_of_week</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">months_of_year</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">scheduled_backup_times</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `absolute_criteria_input`<sup>Optional</sup> <a name="absolute_criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```python
absolute_criteria_input: str
```

- *Type:* str

---

##### `days_of_week_input`<sup>Optional</sup> <a name="days_of_week_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```python
days_of_week_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year_input`<sup>Optional</sup> <a name="months_of_year_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```python
months_of_year_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times_input`<sup>Optional</sup> <a name="scheduled_backup_times_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```python
scheduled_backup_times_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month_input`<sup>Optional</sup> <a name="weeks_of_month_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```python
weeks_of_month_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `absolute_criteria`<sup>Required</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```python
absolute_criteria: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```python
days_of_week: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `months_of_year`<sup>Required</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```python
months_of_year: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scheduled_backup_times`<sup>Required</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```python
scheduled_backup_times: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">data_store_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">data_store_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_store_type_input`<sup>Optional</sup> <a name="data_store_type_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```python
data_store_type_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `data_store_type`<sup>Required</sup> <a name="data_store_type" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```python
data_store_type: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria">put_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">put_life_cycle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_criteria` <a name="put_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```python
def put_criteria(
  absolute_criteria: str = None,
  days_of_week: typing.List[str] = None,
  months_of_year: typing.List[str] = None,
  scheduled_backup_times: typing.List[str] = None,
  weeks_of_month: typing.List[str] = None
) -> None
```

###### `absolute_criteria`<sup>Optional</sup> <a name="absolute_criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.absoluteCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}.

---

###### `days_of_week`<sup>Optional</sup> <a name="days_of_week" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.daysOfWeek"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}.

---

###### `months_of_year`<sup>Optional</sup> <a name="months_of_year" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.monthsOfYear"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}.

---

###### `scheduled_backup_times`<sup>Optional</sup> <a name="scheduled_backup_times" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.scheduledBackupTimes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}.

---

###### `weeks_of_month`<sup>Optional</sup> <a name="weeks_of_month" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.weeksOfMonth"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}.

---

##### `put_life_cycle` <a name="put_life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```python
def put_life_cycle(
  value: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">life_cycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">criteria_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">life_cycle_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```python
criteria: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `life_cycle`<sup>Required</sup> <a name="life_cycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```python
life_cycle: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `criteria_input`<sup>Optional</sup> <a name="criteria_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```python
criteria_input: DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `life_cycle_input`<sup>Optional</sup> <a name="life_cycle_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```python
life_cycle_input: typing.Union[IResolvable, typing.List[DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule</a>]

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_protection_backup_policy_postgresql_flexible_server

dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>]

---



